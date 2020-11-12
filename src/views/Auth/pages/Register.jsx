import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Formik, FastField } from "formik";
import InputField from "custom-fields/InputField/InputField";
import firebase from "utils/firebase";

const Register = ({ history }) => {
  const [initialValues] = useState(() => ({
    email: "",
    password: "",
  }));
  const handleRegister = useCallback(
    async (data) => {
      try {
        const { email, password } = data;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="auth-content shadow bg-white rounded p-4 text-center">
      <h1 className="font-18">Join 12 million others</h1>
      <p>
        Download free photos and videos powered by a community of photographers.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleRegister}>
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
                Create New Account
              </button>
            </Form>
          );
        }}
      </Formik>
      <p className="my-3 font-10">
        By joining, you agree to our Terms of Service and Privacy Policy
      </p>
      <Link to="/login" className="font-italic">
        Login
      </Link>
    </div>
  );
};

export default Register;
