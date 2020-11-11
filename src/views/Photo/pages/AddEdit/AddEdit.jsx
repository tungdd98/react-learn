import React, { useState } from "react";
import Header from "components/Header/Header";
import { Form, Formik, FastField } from "formik";
import * as Yup from "yup";
import InputField from "custom-fields/InputField/InputField";
import SelectField from "custom-fields/SelectField/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField/RandomPhotoField";
import RadioField from "custom-fields/RadioField/RadioField";
import UploadField from "custom-fields/UploadField/UploadField";
import { CATEGORIES, SIZES, TYPES } from "utils/constants";
import PhotoApi from "apis/photoApi";
import { useHistory } from "react-router-dom";

const schema = Yup.object().shape({
  title: Yup.string().required(),
  categoryId: Yup.number().required().nullable(),
  type: Yup.number().required(),
  imageUrl: Yup.string().required(),
});

const PhotoAddEdit = () => {
  const history = useHistory();
  const [initialValues] = useState(() => ({
    title: "",
    categoryId: null,
    size: "300",
    type: 1,
    imageUrl: "",
  }));
  const handleSubmit = async (data) => {
    const res = await PhotoApi.uploadPhoto(data);
    if (res) {
      history.push("/photos");
    }
  };
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header showBg={true} />
      <div className="upload mx-auto my-3 container-fluid">
        <h1 className="text-center mb-3">Upload Photos & Videos</h1>
        <ul className="list-circle">
          <li className="mb-1">
            Your uploads will be distributed for free under the Pexels license.
          </li>
          <li className="mb-1">
            To increase the chance of being featured, please ensure that your
            submissions meet our guidelines.
          </li>
          <li className="mb-1">
            We'll review your submission. If it gets selected, you will receive
            an email notification and your content will be featured in our
            search.
          </li>
        </ul>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { size, type } = formikProps.values;
          const options = {
            size,
          };
          return (
            <Form>
              <div
                className="upload mx-auto container-fluid"
                style={{ marginBottom: "100px" }}
              >
                <FastField
                  name="title"
                  component={InputField}
                  label="Title image"
                  placeholder="Eg.."
                />
                <div className="row position-relative z-index">
                  <div className="col-12 col-sm-6">
                    <FastField
                      name="categoryId"
                      component={SelectField}
                      label="Category"
                      placeholder="Select category"
                      options={CATEGORIES}
                    />
                  </div>
                  {type === 1 && (
                    <div className="col-12 col-sm-6">
                      <FastField
                        name="size"
                        component={SelectField}
                        label="Size"
                        placeholder="Select size"
                        options={SIZES}
                      />
                    </div>
                  )}
                </div>
                <FastField
                  name="type"
                  label="Type"
                  component={RadioField}
                  options={TYPES}
                />
                {type === 1 ? (
                  <FastField
                    name="imageUrl"
                    label="Photo"
                    component={RandomPhotoField}
                    options={options}
                  />
                ) : (
                  <FastField
                    name="imageUrl"
                    label="Photo"
                    component={UploadField}
                  />
                )}
              </div>
              <div className="border-top py-3 flex-center fixed-bottom bg-white">
                <button className="btn btn-success" type="submit">
                  Publish
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PhotoAddEdit;
