
import React from "react";
import styles from "../styles/Todo.module.css";

const Todo = ({ todo }) => {
    return <li className={styles.item}>{todo}</li>;
};
