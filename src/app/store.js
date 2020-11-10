import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "components/Loading/loadingSlice";

export default configureStore({
    reducer: {
        loading: loadingReducer,
    },
});
