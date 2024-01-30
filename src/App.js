import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "bag", quantity: 2, packed: true },
//   { id: 2, description: "laptop", quantity: 1, packed: false },
//   { id: 3, description: "phone", quantity: 3, packed: false },
// ];

const questions = [
  { id: 1, question: "what is react", answer: "react is a fontend framework" },
  {
    id: 2,
    question: "what is state",
    answer: "state is used to make react interactive",
  },
  {
    id: 3,
    question: "what is props",
    answer: "props is used to pass data to child component from the parent",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(0);

  function handleClick(id) {
    // id === selectedId ? id : null;
    if (id !== selectedId) {
      setSelectedId(id);
    } else {
      setSelectedId(0);
    }
  }
  return (
    <div className="App">
      {questions.map((question) => (
        <div
          className={`box ${question.id === selectedId ? "answer" : ""}`}
          onClick={() => handleClick(question.id)}
        >
          {question.id === selectedId ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}
export default App;
