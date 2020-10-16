import { configureStore } from "@reduxjs/toolkit";
import counter from "../counter/counterSlice";
import todo from "../todo/todoSlice";

export default configureStore({
    reducer: {
        counter,
        todo,
    },
});
