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
import Mapel from "./components/page/mapel";
import TambahMapel from "./components/page/mapel/TambahMapel";
import Jadwal from "./components/page/jadwal";
import TambahJadwal from "./components/page/jadwal/TambahJadwal";
import UserDeactive from "./components/page/error/UserDeactive";
import Users from "./components/page/users";

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
            <Route exact path="user-deactive" element={<UserDeactive />} />
            <Route path="/" element={<PrivateRoute component={Home} />} />
            <Route path="users" element={<PrivateRoute component={Users} />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/kelas" element={<PrivateRoute component={Ruang} />} />
            <Route
              path="/kelas/buat"
              element={<PrivateRoute component={BuatKelas} />}
            />
            <Route path="/mapel" element={<PrivateRoute component={Mapel} />} />
            <Route
              path="/mapel/tambah"
              element={<PrivateRoute component={TambahMapel} />}
            />
            <Route
              path="/jadwal"
              element={<PrivateRoute component={Jadwal} />}
            />
            <Route
              path="/jadwal/tambah"
              element={<PrivateRoute component={TambahJadwal} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
