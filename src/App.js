import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/page/beranda/Home";
import Dashboard from "./components/page/dashboard";
import Login from "./components/page/auth/Login";
import Register from "./components/page/auth/Register";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Ruang from "./components/page/ruang";
import BuatKelas from "./components/page/ruang/BuatKelas";
import BasicAlert from "./components/layouts/BasicAlert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <BasicAlert />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute component={Home} />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/kelas" element={<PrivateRoute component={Ruang} />} />
            <Route
              path="/kelas/buat"
              element={<PrivateRoute component={BuatKelas} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
