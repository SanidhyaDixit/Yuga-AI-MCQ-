import React from "react";

const QuizPage = ({ questions, answers, onAnswerChange }) => {
  return (
    <div>
      {questions.map((q, index) => (
        <div key={q._id} className="question-card">
          <div className="question-title">
            Q{index + 1}. {q.questionText}
          </div>

          {q.options.map((option, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name={q._id}
                value={i}
                checked={answers[q._id] === i}
                onChange={() => onAnswerChange(q._id, i)}
              />{" "}
              {String.fromCharCode(65 + i)}. {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
