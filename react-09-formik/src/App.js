import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Damla",
          lastName: "Kasal",
          email: "damlaervakasal3@gmail.com89",
          gender: "female",
          hobies: [],
          country: "England",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />

            <br />
            <br />

            <label htmlFor="gender">Gender</label>
            <br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="famale"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />

            <div>
              football
              <input
                type="checkbox"
                name="hobies"
                value="football"
                onChange={handleChange}
              />
            </div>
            <div>
              cinema
              <input
                type="checkbox"
                name="hobies"
                value="cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              watch movie
              <input
                type="checkbox"
                name="hobies"
                value="watch movie"
                onChange={handleChange}
              />
            </div>
            <br />

            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="tr">Turkey</option>
              <option value="uk">England</option>
              <option value="usa">America</option>
            </select>
            <br />
            <br />

            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
