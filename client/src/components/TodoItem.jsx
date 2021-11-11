import React, { useState, useRef } from "react";
import request from "./requests.js";

import styles from "./todoItem.module.css";

const TodoItem = (props) => {
  const [done, setDone] = useState(props.todo.done);
  const [updating, setUpdating] = useState(false);
  const todoText = useRef(null);

  const handleCheck = async (e) => {
    const currentDoneStatus = done;
    setDone((done) => !done);
    const currentTodo = props.todo;
    currentTodo.done = !currentDoneStatus;
    const updateTodo = await request.updateTodo(currentTodo);
  };

  const handleUpdate = async () => {
    if (!updating) {
      todoText.current.contentEditable = true;
      todoText.current.focus();
    } else {
      try {
        todoText.current.contentEditable = false;
        const updatedTodoName = todoText.current.innerHTML;
        const currentTodo = props.todo;
        currentTodo.name = updatedTodoName;
        const updatedTodo = currentTodo;
        const updateTodo = await request.updateTodo(updatedTodo);
      } catch (e) {
        console.error(e);
      }
    }
    setUpdating((updating) => !updating);
  };

  return (
    <div className={styles.todoItem}>
      <span
        className={`${styles.todoName} ${done ? styles.done : ""}`}
        ref={todoText}
        onClick={(e) => {
          !updating ? handleCheck(e) : null;
        }}
        onKeyDown={(e) => {
          e.key === "Enter" ? handleUpdate() : null;
        }}
      >
        {props.todo.name}
      </span>
      {done ? (
        <span
          onClick={() => props.handleDelete(props.todo.id)}
          className={styles.delete}
        >
          Delete
        </span>
      ) : updating ? (
        <span onClick={handleUpdate} className={styles.delete}>
          Save
        </span>
      ) : (
        <span onClick={handleUpdate} className={styles.delete}>
          Update
        </span>
      )}
    </div>
  );
};

export default TodoItem;
