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

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
