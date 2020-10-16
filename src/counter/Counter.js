import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from "./counterSlice";

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmout, setIncrementAmout] = useState(0);

    return (
        <div>
            <div>
                <button
                    style={{ marginRight: "10px" }}
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <div style={{ marginTop: "10px" }}>
                    <input
                        type="text"
                        value={incrementAmout}
                        onChange={(e) => setIncrementAmout(e.target.value)}
                    />
                    <button
                        onClick={() =>
                            dispatch(
                                incrementByAmount(parseInt(incrementAmout) || 0)
                            )
                        }
                    >
                        Add amount
                    </button>
                    <button
                        onClick={() =>
                            dispatch(
                                incrementAsync(parseInt(incrementAmout) || 0)
                            )
                        }
                    >
                        Add async
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
