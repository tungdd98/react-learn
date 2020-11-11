import React, { useState } from "react";
import InputField from "custom-fields/InputField/InputField";
import { Form, Formik, FastField } from "formik";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/photos",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const Login = () => {
  const [initialValues] = useState(() => ({
    email: "",
    password: "",
  }));
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="auth-content shadow bg-white rounded p-4 text-center">
      <h1 className="font-18">Welcome Back To Pexels</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <p>OR</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form>
              <FastField
                name="email"
                component={InputField}
                placeholder="Email"
              />
              <FastField
                name="password"
                component={InputField}
                placeholder="Password"
              />
              <button className="btn btn-success btn-block" type="submit">
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
      <p className="my-3">Forgot your password?</p>
    </div>
  );
};

export default Login;
