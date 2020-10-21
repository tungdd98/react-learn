import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

const calculate = (a, b) => {
    if (!calculate.cache) {
        calculate.cache = {};
    }
    const key = `${a}_${b}`;
    const reverseKey = `${b}_${a}`;
    if (key in calculate.cache) {
        console.log("Cache key", key);
        return calculate.cache[key];
    }
    if (reverseKey in calculate.cache) {
        console.log("Cache reverse key", reverseKey);
        return calculate.cache[reverseKey];
    }
    const sum = parseInt(a + b);
    calculate.cache[key] = sum;
    calculate.cache[reverseKey] = sum;
    return sum;
};
console.log(calculate(3, 1));
console.log(calculate(3, 1));
console.log(calculate(2, 3));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
