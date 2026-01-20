function StartScreen({ totalQuestions, onStart }) {
  return (
    <div className="start-screen">
      <div className="start-card">
        <h1>🧠 Quiz Challenge</h1>
        <p>Test your knowledge!</p>

        <div className="info-grid">
          <div className="info-item">
            <span className="info-icon">❓</span>
            <span className="info-value">{totalQuestions}</span>
            <span className="info-label">Questions</span>
          </div>
          <div className="info-item">
            <span className="info-icon">⏱️</span>
            <span className="info-value">10s</span>
            <span className="info-label">Per Question</span>
          </div>
          <div className="info-item">
            <span className="info-icon">❤️</span>
            <span className="info-value">3</span>
            <span className="info-label">Lives</span>
          </div>
        </div>

        <button className="start-btn" onClick={onStart}>
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
}

export default StartScreen;