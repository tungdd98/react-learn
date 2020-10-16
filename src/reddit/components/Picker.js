import React from "react";
import propTypes from "prop-types";

const Picker = ({ value, onChange, options }) => (
    <span>
        <h1>{value}</h1>
        <select onChange={(e) => onChange(e.target.value)} value={value}>
            {options.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
    </span>
);

Picker.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};

export default Picker;
