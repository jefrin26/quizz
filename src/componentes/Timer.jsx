import { useState, useEffect } from "react";

function Timer({ duration, onTimeout, questionId }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset timer on question change
  useEffect(() => {
    setTimeLeft(duration);
  }, [questionId, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeout]);

  const percentage = (timeLeft / duration) * 100;
  const color =
    timeLeft <= 3
      ? "#e74c3c"
      : timeLeft <= 5
      ? "#f39c12"
      : "#2ecc71";

  return (
    <div className="timer">
      <div
        className="timer-circle"
        style={{
          background: `conic-gradient(${color} ${percentage}%, #eee ${percentage}%)`,
        }}
      >
        <span className="timer-text" style={{ color }}>
          {timeLeft}
        </span>
      </div>
    </div>
  );
}

export default Timer;
