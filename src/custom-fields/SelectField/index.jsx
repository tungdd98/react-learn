import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Label, FormGroup } from "reactstrap";

const SelectField = (props) => {
    const { field, form, placeholder, label, options } = props;
    const handleSelectChange = (selected) => {
        const selectedValue = selected ? selected.value : selected;

        const changeEvent = {
            target: {
                name: field.name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };
    return (
        <FormGroup>
            {label && <Label for={field.name}>{label}</Label>}
            <Select
                {...field}
                id={field.name}
                placeholder={placeholder}
                options={options}
                onChange={handleSelectChange}
            ></Select>
        </FormGroup>
    );
};

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    placeholder: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    placeholder: "",
    label: "",
    options: [],
};

export default SelectField;
