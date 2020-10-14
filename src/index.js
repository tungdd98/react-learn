import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import * as serviceWorker from "./serviceWorker";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { selectSubreddit, fetchPosts } from "./reddit/actions";
import reddit from "./reddit/reducers";

const loggerMiddleware = createLogger();
const store = createStore(
    reddit,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(selectSubreddit("reactjs"));
store.dispatch(fetchPosts("reactjs")).then(() => console.log(store.getState()));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
