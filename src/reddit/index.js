import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reddit from "./reducers";

const loggerMiddleware = createLogger();
const configureStore = (preloadedState) => {
    return createStore(
        reddit,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
};
export default configureStore;
