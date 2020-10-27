import React from "react";
import PropTypes from "prop-types";
import { Label, FormGroup, Button } from "reactstrap";
import Select from "react-select";
import { Formik, Form, FastField } from "formik";
import { CATEGORIES, IMAGES } from "utils/constants";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import style from "./PhotoForm.module.scss";

const PhotoForm = (props) => {
    const { onSubmit } = props;
    const initialValues = {
        title: "",
    };
    return (
        <div className={`mx-auto my-3 ${style.photoForm}`}>
            <Formik initialValues={initialValues}>
                {(formikProps) => {
                    const { value, errors, touched } = formikProps;
                    console.log({ value, errors, touched });
                    return (
                        <Form>
                            <FastField
                                name="title"
                                component={InputField}
                                label="Title"
                                placeholder="Eg: Wow nature..."
                            />
                            <FastField
                                name="category"
                                component={SelectField}
                                label="Category"
                                placeholder="What's your photo category?"
                                options={CATEGORIES}
                            />
                            <FormGroup>
                                <Label for="category">Photo</Label>
                                <div>
                                    <Button outline color="info" size="sm">
                                        Random a photo
                                    </Button>
                                </div>
                                <div
                                    className={`overflow-hidden rounded shadow-sm my-2 ${style.photoImage}`}
                                >
                                    <img
                                        src={IMAGES.orangeBg}
                                        alt="color"
                                        className="img-fluid"
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Button color="info" size="sm" type="submit">
                                    Add a album
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
};

export default PhotoForm;
