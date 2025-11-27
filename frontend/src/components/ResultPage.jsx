import React from "react";

const ResultPage = ({ result }) => {
  if (!result) return <div>No result data.</div>;

  const { score, totalQuestions, resultDetails } = result;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Quiz Result</h2>
      <p style={{ textAlign: "center", fontSize: 18 }}>
        Your Score: <strong>{score}</strong> / {totalQuestions}
      </p>

      <h3 style={{ marginTop: 30 }}>Detailed Review</h3>
      {resultDetails.map((item, index) => {
        const userSelected =
          typeof item.selectedIndex === "number"
            ? item.options[item.selectedIndex]
            : "Not answered";

        const correctAnswer = item.options[item.correctOptionIndex];

        return (
          <div
            key={item.questionId}
            style={{
              marginBottom: 20,
              padding: 15,
              borderRadius: 8,
              border: "1px solid #ddd",
              backgroundColor: item.isCorrect ? "#e8ffe8" : "#ffe8e8"
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: 8 }}>
              Q{index + 1}. {item.questionText}
            </div>
            <p>
              <strong>Your Answer:</strong> {userSelected}
            </p>
            <p>
              <strong>Correct Answer:</strong> {correctAnswer}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {item.isCorrect ? "✅ Correct" : "❌ Wrong"}
            </p>
            {!item.isCorrect && (
              <p style={{ marginTop: 8 }}>
                <strong>Explanation:</strong> {item.explanation}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ResultPage;
