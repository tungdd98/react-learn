import React from "react";
import PropTypes from "prop-types";
import { FormGroup, CustomInput, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

const RadioField = (props) => {
  const { field, form, label, options } = props;
  const showError = form.errors[field.name] && form.touched[field.name];
  return (
    <FormGroup>
      {label && <Label className="font-weight-600">{label}</Label>}
      <div className={showError && "is-invalid"}>
        {options.map((option, i) => (
          <CustomInput
            key={i}
            type="radio"
            name={field.name}
            id={option.value}
            label={option.label}
            value={option.value}
            checked={option.value === field.value}
            {...field}
            onChange={() => form.setFieldValue(field.name, option.value)}
          />
        ))}
      </div>
      <ErrorMessage name={field.name} component={FormFeedback} />
    </FormGroup>
  );
};

RadioField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  options: PropTypes.array,
};

RadioField.defaultProps = {
  label: "",
  options: [],
};

export default RadioField;
