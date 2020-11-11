import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Label, FormGroup, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

const SelectField = (props) => {
  const { field, form, placeholder, label, options } = props;
  const selectedOption = options.find((option) => option.value === field.value);
  const showError = form.errors[field.name] && form.touched[field.name];
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
      {label && (
        <Label for={field.name} className="font-weight-600">
          {label}
        </Label>
      )}
      <Select
        id={field.name}
        {...field}
        value={selectedOption}
        placeholder={placeholder}
        options={options}
        onChange={handleSelectChange}
        className={showError && "is-invalid"}
      ></Select>
      <ErrorMessage name={field.name} component={FormFeedback} />
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
