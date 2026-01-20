import Quiz from "./componentes/Quiz.jsx";
import { questions } from "./data/questions.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;