import React from "react";
import "../style.css";
import { useState } from "react";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input === "") return;
    setTodos((todo) => [
      ...todo,
      { text: input, id: Math.floor(Math.random() * 10000) },
    ]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos((todo) => todo.filter((t) => t.id !== index));
  };
  return (
    <>
      <div className="container">
        <div className="container">
          <input
            type="text"
            value={input}
            placeholder="New Todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo} className="btn">
            Add Todo
          </button>
        </div>
      </div>
      <div className="items">
        {todos.map(({ text, id }, index) => (
          <div className="item">
            <p key={index}>
              You Should : <span>{text}</span>
            </p>
            <button onClick={() => removeTodo(id)} className="btn delete">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
