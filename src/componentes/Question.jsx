function Question({ data, onAnswer, disabled }) {
  return (
    <div className="question-container">
      <h2 className="question-text">{data.question}</h2>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              disabled && index === data.correctAnswer ? "correct" : ""
            } ${
              disabled && index !== data.correctAnswer && disabled ? "disabled" : ""
            }`}
            onClick={() => onAnswer(index)}
            disabled={disabled}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;