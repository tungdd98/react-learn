import React from "react";
import PropTypes from "prop-types";
import { Label, Input, FormGroup } from "reactstrap";

const InputField = (props) => {
    const { field, form, type, label, placeholder, disabled } = props;
    return (
        <FormGroup>
            {label && <Label for={field.name}>{label}</Label>}
            <Input
                {...field}
                id={field.name}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
            />
        </FormGroup>
    );
};

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
};

export default InputField;
