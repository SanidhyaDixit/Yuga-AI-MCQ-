import React, { useEffect, useState } from "react";

const Timer = ({ minutes, onTimeUp, isRunning }) => {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (!isRunning) return;

    if (secondsLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, isRunning, onTimeUp]);

  const m = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const s = (secondsLeft % 60).toString().padStart(2, "0");

  return (
  <div className="timer">
    ⏱ Time Remaining: {m}:{s}
  </div>
);

};

export default Timer;
