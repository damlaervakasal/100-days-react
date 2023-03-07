import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            {/* form etiketi yerine html etiketi olan form etiketini kullandık */}
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={handleChange} />
            <br />
            <br />
            {/* <Field id="firstName" name="firstName" placeholder="Jane" /> */}
            {/* field etiketi yerine html etiketi olan input etiketini kullandık */}
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} />
            {/* <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
