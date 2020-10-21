import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import style from "./TodoList.module.scss";

const TodoList = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "Chuqua Chula" },
        { id: 2, title: "Tiki taka" },
        { id: 3, title: "Hiển qua cứt" },
    ]);
    const handleRemoveTodo = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };
    const handleAddTodo = (todo) => {
        setTodoList([...todoList, todo]);
    };
    return (
        <div>
            <h4>TodoList app</h4>
            <TodoForm onSubmit={handleAddTodo} />
            <ul className={style.todoList}>
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onTodoClick={() => handleRemoveTodo(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
