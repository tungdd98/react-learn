import React from "react";
import Counter from "./counter/Counter";
import TodoList from "./todo/TodoList";

const App = () => {
    return (
        <div>
            <div>Counter app</div>
            <Counter />
            <hr />
            <TodoList />
        </div>
    );
};

export default App;
