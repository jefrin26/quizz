function Question({ data, onAnswer, disabled, selectedIndex }) {
  return (
    <div className="question-container">
      <h2 className="question-text">{data.question}</h2>

      <div className="options image-options">
        {data.options.map((option, index) => {
          const isCorrect = index === data.correctAnswer;
          const fileName = isCorrect ? `${option}_c.jpeg` : `${option}.jpeg`;
          const src = new URL(`../data/images/${fileName}`, import.meta.url).href;

          const classes = [
            "option-btn",
            "image-option",
            disabled && isCorrect ? "correct" : "",
            disabled && !isCorrect ? "incorrect" : "",
            disabled && selectedIndex === index ? "chosen" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={index}
              className={classes}
              onClick={() => onAnswer(index)}
              disabled={disabled}
            >
              <img src={src} alt={option} className="image-thumb" />
              <div className="image-label">{String.fromCharCode(65 + index)}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;