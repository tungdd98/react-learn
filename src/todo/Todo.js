import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, selectTodo } from "./todoSlice";
import style from "./Todo.module.css";

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <li className={style.todo}>
            <span>{todo.title}</span>
            <div>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                    Delete
                </button>
                <button onClick={() => dispatch(selectTodo(todo))}>Edit</button>
            </div>
        </li>
    );
};

export default Todo;
