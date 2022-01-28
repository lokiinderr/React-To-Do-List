import React from "react";

function TodoList(props) {
  return (
    <li
      onClick={() => {
        return props.loChecked(props.id);
      }}
    >
      {" "}
      {props.listItem}{" "}
    </li>
  );
}
export default TodoList;
