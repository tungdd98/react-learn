import React, { useState } from "react";
import ColorBox from "../components/ColorBox/ColorBox";
import TodoList from "../components/TodoList/TodoList";
import PostList from "../components/PostList/PostList";
import Clock from "../components/Clock/Clock";
import MagicColor from "../components/MagicColor/MagicColor";

const ReactHooks = () => {
    const [showClock, setShowClock] = useState(true);
    return (
        <div>
            <h1>React hooks</h1>
            <ColorBox />
            <hr />
            <TodoList />
            <hr />
            <PostList />
            <hr />
            {showClock && <Clock />}
            <div>
                <button onClick={() => setShowClock(true)}>Show</button>
                <button onClick={() => setShowClock(false)}>Hide</button>
            </div>
            <hr />
            <MagicColor />
        </div>
    );
};

export default ReactHooks;
