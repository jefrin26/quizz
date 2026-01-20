import { useState, useCallback } from "react";
import Timer from "./Timer";
import Question from "./Question";
import StartScreen from "./StartScreen";
import GameOver from "./GameOver";

function Quiz({ questions }) {
  const [gameState, setGameState] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleStart = () => {
    setGameState("playing");
    setCurrentIndex(0);
    setScore(0);
    setLives(3);
    setCorrectAnswers(0);
    setAnswered(false);
  };

  const goToNext = useCallback(
    (isCorrect) => {
      if (isCorrect) {
        setScore((prev) => prev + 10);
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setLives((prev) => prev - 1);
      }

      const isLastQuestion = currentIndex >= questions.length - 1;
      const noLivesLeft = lives - (isCorrect ? 0 : 1) <= 0;

      if (isLastQuestion || noLivesLeft) {
        setGameState("finished");
      } else {
        setCurrentIndex((prev) => prev + 1);
        setAnswered(false);
      }
    },
    [currentIndex, questions.length, lives]
  );

  const handleAnswer = (selectedIndex) => {
    if (answered) return;
    setAnswered(true);
    const isCorrect =
      selectedIndex === currentQuestion.correctAnswer;
    goToNext(isCorrect);
  };

  const handleTimeout = useCallback(() => {
    if (answered) return;
    setAnswered(true);
    goToNext(false);
  }, [answered, goToNext]);

  if (gameState === "start") {
    return (
      <StartScreen
        totalQuestions={questions.length}
        onStart={handleStart}
      />
    );
  }

  if (gameState === "finished") {
    return (
      <GameOver
        score={score}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        onRestart={handleStart}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="stat-badge lives">
          ❤️ Lives: {lives}
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div className="stat-badge score">
          ⭐ Score: {score}
        </div>
      </div>

      {/* ✅ ONE TIMER ONLY */}
      <Timer
        questionId={currentQuestion.id}
        duration={10}
        onTimeout={handleTimeout}
      />

      <p className="progress-text">
        Question {currentIndex + 1} of {questions.length}
      </p>

      <Question
        data={currentQuestion}
        onAnswer={handleAnswer}
        disabled={answered}
      />
    </div>
  );
}

export default Quiz;
