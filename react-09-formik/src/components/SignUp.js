import React from "react";
import { useFormik } from "formik";
import validations from "./validations";

function SignUp() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        // firstName: "Damla",
        // lastName: "Kasal",
        email: "",
        password: "",
        passwordConfirm: "",
        // gender: "female",
        // hobies: [],
        // country: "Turkey",
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      },
      validationSchema: validations,
    });

  console.log(errors);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        {/* error adı altında e -mail varsa ve buna daha önce focus olunduysa o zaman bu uyarıyı göster */}
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />

        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default SignUp;
