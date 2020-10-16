import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addTodo,
    updateTodo,
    selectTodo,
    selectTodos,
    selectSelectedTodo,
} from "./todoSlice";
import Todo from "./Todo";
import style from "./Todo.module.css";

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const selectedTodo = useSelector(selectSelectedTodo);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [btnTitle, setBtnTitle] = useState("Add todo");
    const random = (max = 10000, min = 0) =>
        Math.floor(Math.random() * max + min);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            return;
        }
        if (!selectedTodo) {
            dispatch(
                addTodo({
                    id: random(),
                    title,
                })
            );
        } else {
            dispatch(
                updateTodo({
                    id: selectedTodo.id,
                    title,
                })
            );
            dispatch(selectTodo(null));
        }
        handleReset();
    };

    const handleReset = () => {
        setTitle("");
    };
    useEffect(() => {
        if (selectedTodo) {
            setTitle(selectedTodo.title);
            setBtnTitle("Update todo");
        } else {
            setBtnTitle("Add todo");
        }
    }, [selectedTodo]);
    return (
        <div>
            <h2 style={{ fontWeight: 300 }}>Todo List</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter todo name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value.trim())}
                    />
                    <button type="submit">{btnTitle}</button>
                </form>
            </div>
            <ul className={style.todoList}>
                {todos.map((todo, i) => (
                    <Todo key={i} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
