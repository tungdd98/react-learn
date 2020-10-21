import React, { useState } from "react";
import PropTypes from "prop-types";

let nextId = 4;

const TodoForm = (props) => {
    const { onSubmit } = props;
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit || !value) {
            return;
        }
        onSubmit({
            id: nextId++,
            title: value,
        });
        handleReset();
    };
    const handleReset = () => {
        setValue("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter todo name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Add todo</button>
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};

export default TodoForm;
