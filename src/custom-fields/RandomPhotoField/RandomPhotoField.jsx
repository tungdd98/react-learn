import React from "react";
import PropsType from "prop-types";
import { Label, FormGroup, FormFeedback } from "reactstrap";
import RandomPhoto from "components/RandomPhoto/RandomPhoto";
import { ErrorMessage } from "formik";

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

RandomPhotoField.propsType = {
    form: PropsType.object.isRequired,
    field: PropsType.object.isRequired,
    label: PropsType.string,
    options: PropsType.object,
};

RandomPhotoField.defaultProps = {
    label: "",
    options: null,
};

export default RandomPhotoField;
