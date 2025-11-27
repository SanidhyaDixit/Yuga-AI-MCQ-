const express = require("express");
const Question = require("../models/Question");

const router = express.Router();

// GET /api/questions - fetch all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Server error while fetching questions" });
  }
});

// POST /api/questions/submit - evaluate answers
// body: { answers: [{ questionId, selectedIndex }] }
router.post("/submit", async (req, res) => {
  try {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res
        .status(400)
        .json({ message: "Answers array is required and cannot be empty." });
    }

    const questionIds = answers.map((a) => a.questionId);
    const questions = await Question.find({ _id: { $in: questionIds } });

    let score = 0;
    const resultDetails = questions.map((q) => {
      const userAnswer = answers.find(
        (a) => String(a.questionId) === String(q._id)
      );

      const selectedIndex =
        userAnswer && typeof userAnswer.selectedIndex === "number"
          ? userAnswer.selectedIndex
          : null;

      const isCorrect = selectedIndex === q.correctOptionIndex;

      if (isCorrect) score++;

      return {
        questionId: q._id,
        questionText: q.questionText,
        options: q.options,
        selectedIndex,
        correctOptionIndex: q.correctOptionIndex,
        isCorrect,
        explanation: q.explanation
      };
    });

    res.json({
      score,
      totalQuestions: questions.length,
      resultDetails
    });
  } catch (error) {
    console.error("Error while submitting answers:", error);
    res.status(500).json({
      message: "Server error while evaluating answers"
    });
  }
});

module.exports = router;
