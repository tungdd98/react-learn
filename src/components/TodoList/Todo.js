import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
    const { title, onTodoClick } = props;
    return <li onClick={onTodoClick}>{title}</li>;
};

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

export default Todo;
