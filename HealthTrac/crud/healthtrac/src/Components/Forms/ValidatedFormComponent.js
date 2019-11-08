import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
  <div>
    <h1>Validated Form Component</h1>
  </div>
);

<Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Logging in", values);
      setSubmitting(false);
    }, 500);
  }}
>
  <h1>Validated Login Form</h1>
</Formik>

{ props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <div>
      <h1>Validated Login Form</h1>
    </div>
  );
}}

{ props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input name="email" type="text" placeholder="Enter your email" />

      <label htmlFor="email">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <button type="submit" >
        Login
      </button>
    </form>
  );
}}

<button type="submit" disabled={isSubmitting}>
Login
</button>
export default ValidatedLoginForm;