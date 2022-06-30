import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container m-auto w-1/2 mt-5">
      <div className="container rounded bg-white p-10 drop-shadow">
        <h1 className="text-center mb-5">Registrasi</h1>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="flex flex-col">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">No.HP</label>
            <input
              type="text"
              name="phone"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mt-5">
            <Link to="/login" className="text-blue-400 hover:text-blue-600">
              <span>Sudah punya akun ?</span>
            </Link>
          </div>
          <div className="mt-2 mx-auto">
            <input
              type="submit"
              className="bg-cyan-400 text-center py-3 px-5 text-white hover:bg-cyan-600 rounded"
              value="Daftar akun"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
