import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "components/RandomPhoto";
import { ErrorMessage } from "formik";

const RandomPhotoField = (props) => {
    const { field, form, label } = props;
    const showError = form.errors[field.name] && form.touched[field.name];
    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(field.name, newImageUrl);
    };
    return (
        <FormGroup>
            {label && <Label for={field.name}>{label}</Label>}
            <RandomPhoto
                name={field.name}
                imageUrl={field.value}
                onRandomButtonBlue={field.onBlur}
                onImageUrlChange={handleImageUrlChange}
                className={showError && "is-invalid"}
            />
            <ErrorMessage name={field.name} component={FormFeedback} />
        </FormGroup>
    );
};

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: "",
};

export default RandomPhotoField;
