import React from "react";
import useClock from "../../hooks/useClock";

const Clock = () => {
    const { time } = useClock();
    return (
        <div>
            <h4>Clock app</h4>
            <h2>{time}</h2>
        </div>
    );
};

export default Clock;
