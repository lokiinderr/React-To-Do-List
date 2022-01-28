import "./styles.css";
import React, { useState } from "react";
import TodoList from "./TodoList.js";

export default function App() {
  const [value, setValue] = useState();
  const [items, setItems] = useState([]);

  function inputFunc(event) {
    return setValue(event.target.value);
  }

  function checked(id) {
    setItems((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  function addTolist() {
    setItems((prevValue) => {
      return [...prevValue, value];
    });
    setValue("");
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        className="css-input"
        value={value}
        onChange={inputFunc}
      />
      <button onClick={addTolist} className="myButton">
        Add
      </button>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoList
                loChecked={checked}
                id={index}
                key={index}
                listItem={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
