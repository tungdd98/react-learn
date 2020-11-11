import React from "react";
import ImageUploader from "react-images-upload";
import { Label, FormGroup, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

const UploadField = (props) => {
  const { field, form, label } = props;
  const showError = form.errors[field.name] && form.touched[field.name];
  const onDrop = (picture) => {
    form.setFieldValue(field.name, picture);
  };
  return (
    <FormGroup>
      {label && <Label for={field.name}>{label}</Label>}
      <ImageUploader
        {...field}
        id={field.name}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        withPreview={true}
        singleImage={true}
        className={showError && "is-invalid"}
      />
      <ErrorMessage name={field.name} component={FormFeedback} />
    </FormGroup>
  );
};

export default UploadField;
