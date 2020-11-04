import { configureStore } from "@reduxjs/toolkit";
import photo from "features/Photo/photoSlice";

const rootReducer = {
    photo,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
