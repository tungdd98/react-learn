import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        selectedTodo: null,
        todos: [
            {
                id: 1,
                title: "Fix bug 2020",
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        },
        selectTodo: (state, action) => {
            state.selectedTodo = action.payload;
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    updateTodo,
    selectTodo,
} = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;
export const selectSelectedTodo = (state) => state.todo.selectedTodo;

export default todoSlice.reducer;
