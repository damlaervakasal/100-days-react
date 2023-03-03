import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/users" element={<Users />} />

            <Route path="/home" element={<Home />} />

            <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
