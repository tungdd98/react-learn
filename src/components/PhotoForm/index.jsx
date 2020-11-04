import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Button, Spinner } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import { CATEGORIES } from "utils/constants";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from "yup";
import style from "./PhotoForm.module.scss";

const AddPhotoSchema = Yup.object().shape({
    title: Yup.string().required(),
    category: Yup.number().required().nullable(),
    photo: Yup.string().when("category", {
        is: 1,
        then: Yup.string().required(),
        otherwise: Yup.string().notRequired(),
    }),
});

const PhotoForm = (props) => {
    const { onSubmit, initialValues, isEdit } = props;
    return (
        <div className={`mx-auto my-3 ${style.photoForm}`}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={AddPhotoSchema}
            >
                {(formikProps) => {
                    const { isSubmitting } = formikProps;
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
                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />
                            <FormGroup className="text-center">
                                <Button
                                    color={!isEdit ? "info" : "danger"}
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting && <Spinner size="sm" />}
                                    {!isEdit ? "Add new photo" : "Update photo"}
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
