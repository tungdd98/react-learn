import React from "react";
import PropTypes from "prop-types";
import { Label, FormGroup, FormFeedback, Input } from "reactstrap";
import { ErrorMessage } from "formik";

const InputField = (props) => {
    const { field, form, type, label, placeholder, disabled } = props;
    const showError = form.errors[field.name] && form.touched[field.name];
    return (
        <FormGroup>
            {label && (
                <Label for={field.name} className="font-weight-600">
                    {label}
                </Label>
            )}
            <Input
                {...field}
                type={type}
                id={field.name}
                placeholder={placeholder}
                disabled={disabled}
                invalid={showError}
            />
            <ErrorMessage
                name={field.name}
                component={FormFeedback}
            ></ErrorMessage>
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
