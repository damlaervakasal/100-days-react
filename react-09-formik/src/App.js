import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";

import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
