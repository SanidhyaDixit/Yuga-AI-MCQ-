import React, { useEffect, useState } from "react";
import API from "./api";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import Timer from "./components/Timer";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // {questionId: selectedIndex}
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const res = await API.get("/questions");
        setQuestions(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch questions.");
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, selectedIndex) => {
    if (isSubmitted) return; // don't allow changes after submit
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedIndex
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitted) return;
    try {
      const payload = {
        answers: Object.entries(answers).map(([questionId, selectedIndex]) => ({
          questionId,
          selectedIndex
        }))
      };

      const res = await API.post("/questions/submit", payload);
      setResult(res.data);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Failed to submit quiz.");
    }
  };

  const handleTimeUp = () => {
    // Auto-submit when timer ends
    handleSubmit();
  };

  if (loading) return <div style={{ padding: 20 }}>Loading questions...</div>;
  if (error) return <div style={{ padding: 20, color: "red" }}>{error}</div>;

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "20px 16px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ textAlign: "center" }}>YUGA AI - MCQ Quiz</h1>

      {!isSubmitted && (
        <div style={{ marginBottom: 20 }}>
          <Timer minutes={10} onTimeUp={handleTimeUp} isRunning={!isSubmitted} />
        </div>
      )}

      {!isSubmitted ? (
        <>
          <QuizPage
            questions={questions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
          />
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: "10px 20px",
                fontSize: 16,
                cursor: "pointer"
              }}
            >
              Submit Quiz
            </button>
          </div>
        </>
      ) : (
        <ResultPage result={result} />
      )}
    </div>
  );
}

export default App;
