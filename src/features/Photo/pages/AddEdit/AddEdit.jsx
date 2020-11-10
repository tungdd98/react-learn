import React, { useState } from "react";
import Header from "components/Header/Header";
import { Form, Formik, FastField } from "formik";
import * as Yup from "yup";
import InputField from "custom-fields/InputField/InputField";
import SelectField from "custom-fields/SelectField/SelectField";
import { CATEGORIES } from "utils/constants";

const schema = Yup.object().shape({
    title: Yup.string().required(),
    categoryId: Yup.number().required(),
});

const PhotoAddEdit = () => {
    const [initialValues] = useState(() => ({
        title: "",
        categoryId: null,
        imageUrl: "",
    }));
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header showBg={true} />
            <div className="upload mx-auto my-3 container-fluid">
                <h1 className="text-center mb-3">Upload Photos & Videos</h1>
                <ul className="list-circle">
                    <li className="mb-1">
                        Your uploads will be distributed for free under the
                        Pexels license.
                    </li>
                    <li className="mb-1">
                        To increase the chance of being featured, please ensure
                        that your submissions meet our guidelines.
                    </li>
                    <li className="mb-1">
                        We'll review your submission. If it gets selected, you
                        will receive an email notification and your content will
                        be featured in our search.
                    </li>
                </ul>
            </div>
            <div className="flex-grow-1 d-flex flex-column">
                <Formik initialValues={initialValues} validationSchema={schema}>
                    {(formikProps) => {
                        console.log(formikProps);
                        return (
                            <Form className="flex-grow-1 d-flex flex-column">
                                <div className="upload mx-auto flex-grow-1 container-fluid">
                                    <FastField
                                        name="title"
                                        component={InputField}
                                        label="Title image"
                                        placeholder="Eg.."
                                    />
                                    <FastField
                                        name="category"
                                        component={SelectField}
                                        label="Category"
                                        placeholder="Select category"
                                        options={CATEGORIES}
                                    />
                                </div>
                                <div className="border-top py-3 flex-center">
                                    <button
                                        className="btn btn-success"
                                        type="submit"
                                    >
                                        Publish
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default PhotoAddEdit;
