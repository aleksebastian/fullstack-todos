import React from "react";
import { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";
import request from "./requests.js";

import TodoItem from "./TodoItem.jsx";

import styles from "./todos.module.css";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  class Todo {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.done = false;
    }
  }

  const getTodoId = () => {
    if (!todos.length) {
      return 1;
    } else {
      return todos[todos.length - 1].id + 1;
    }
  };

  const createTodo = (todo) => {
    const todoId = getTodoId();
    return new Todo(todoId, todo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = createTodo(todo);
    const saveTodo = await request.saveTodo(newTodo);
    const updatedTodos = await request.getTodos();
    setTodos(updatedTodos);
    setTodo("");
  };

  const handleChange = async (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = async (id) => {
    const deleteTodo = await request.deleteTodo(id);
    if (deleteTodo) {
      const updatedTodos = await request.getTodos();
      setTodos(updatedTodos);
    }
  };

  useEffect(async () => {
    let todos = await request.getTodos();
    setTodos(todos);
  }, []);

  return (
    <div className={styles.todo}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            autoFocus
            type="text"
            value={todo}
            onChange={handleChange}
            className={styles.input}
            placeholder="write your todos here.."
          ></input>
        </label>
        <input
          type="submit"
          value="Add todo"
          onSubmit={handleSubmit}
          className={styles.submit}
        ></input>
      </form>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Todos;
