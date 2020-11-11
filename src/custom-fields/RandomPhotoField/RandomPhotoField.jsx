import React from "react";
import PropTypes from "prop-types";
import { Label, FormGroup, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
import RandomPhoto from "components/RandomPhoto/RandomPhoto";

const RandomPhotoField = (props) => {
  const { field, form, label, options } = props;
  const showError = form.errors[field.name] && form.touched[field.name];
  const handleImageChange = (imageUrl) => {
    form.setFieldValue(field.name, imageUrl);
  };
  return (
    <div>
      <FormGroup>
        {label && (
          <Label for={field.name} className="font-weight-600">
            {label}
          </Label>
        )}
        <RandomPhoto
          name={field.name}
          imageUrl={field.value}
          onRandomButtonBlur={field.onBlur}
          onImageUrlChange={handleImageChange}
          className={showError && `is-invalid`}
          options={options}
        />
        <ErrorMessage name={field.name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
};

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  options: PropTypes.object,
};

RandomPhotoField.defaultProps = {
  label: "",
  options: null,
};

export default RandomPhotoField;
