import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/page/beranda/Home";
import Login from "./components/page/auth/Login";
import Register from "./components/page/auth/Register";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
