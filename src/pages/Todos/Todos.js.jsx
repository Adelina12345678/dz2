import React from "react";
import Todo from "../components/Todo";

const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div>
            <h1>Todos Page</h1>
            <ul>
                {todos.map((item, index) => (
                    <Todo key={index} todo={item} />
                ))}
            </ul>
        </div>
    );
};

export default TodosPage;