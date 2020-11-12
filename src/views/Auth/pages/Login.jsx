import React, { useCallback, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Formik, FastField } from "formik";
import firebase, { uiConfig } from "utils/firebase";
import InputField from "custom-fields/InputField/InputField";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { AuthContext } from "App";

const Login = ({ history }) => {
  const [initialValues] = useState(() => ({
    email: "",
    password: "",
  }));
  const handleLogin = useCallback(
    async (data) => {
      try {
        const { email, password } = data;
        await firebase.auth().signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="auth-content shadow bg-white rounded p-4 text-center">
      <h1 className="font-18">Welcome Back To Pexels</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <p>OR</p>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
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
                type="password"
              />
              <button className="btn btn-success btn-block" type="submit">
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
      <p className="my-3">Forgot your password?</p>
      <Link to="/register" className="font-italic">
        Register
      </Link>
    </div>
  );
};

export default Login;
