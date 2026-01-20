function GameOver({ score, totalQuestions, correctAnswers, onRestart }) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getGrade = () => {
    if (percentage >= 80) return { grade: "A", emoji: "🏆" };
    if (percentage >= 60) return { grade: "B", emoji: "🎉" };
    if (percentage >= 40) return { grade: "C", emoji: "👍" };
    return { grade: "D", emoji: "😢" };
  };

  const { grade, emoji } = getGrade();

  return (
    <div className="game-over">
      <div className="game-over-card">
        <div className="result-emoji">{emoji}</div>
        <h1>Quiz Complete!</h1>

        <div className="grade">Grade: {grade}</div>

        <div className="stats">
          <div className="stat">
            <span className="stat-value">{score}</span>
            <span className="stat-label">Score</span>
          </div>
          <div className="stat">
            <span className="stat-value">{correctAnswers}/{totalQuestions}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat">
            <span className="stat-value">{percentage}%</span>
            <span className="stat-label">Accuracy</span>
          </div>
        </div>

        <button className="restart-btn" onClick={onRestart}>
          Play Again 🔄
        </button>
      </div>
    </div>
  );
}

export default GameOver;