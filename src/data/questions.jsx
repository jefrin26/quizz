function Question({ data, onAnswer, disabled, selectedIndex }) {
  return (
    <div className="question-container">
      <h2 className="question-text">{data.question}</h2>

      <div className="options image-options">
        {data.options.map((option, index) => {
          const isCorrect = index === data.correctAnswer;

          // Decide filename automatically
          const imageName = isCorrect
            ? `${option}_c.jpeg`
            : `${option}.jpeg`;

          const imageSrc = new URL(
            `../data/images/${imageName}`,
            import.meta.url
          ).href;

          const classNames = [
            "option-btn",
            "image-option",
            disabled && isCorrect && "correct",
            disabled && selectedIndex === index && !isCorrect && "incorrect",
            disabled && selectedIndex === index && "chosen",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={index}
              className={classNames}
              onClick={() => onAnswer(index)}
              disabled={disabled}
            >
              <img
                src={imageSrc}
                alt={option}
                className="image-thumb"
              />
              <div className="image-label">
                {String.fromCharCode(65 + index)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
