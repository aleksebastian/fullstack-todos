import React from "react";
import styles from "./app.module.css";

import Todos from "./components/Todos.jsx";

const App = (props) => (
  <div>
    <p className={styles.header}>Fullstack To-do</p>
    <Todos />
  </div>
);

export default App;
