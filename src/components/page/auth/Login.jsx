import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container m-auto w-1/2 mt-5">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="container rounded bg-white p-10 drop-shadow">
          <h1 className="text-center mb-5">Login</h1>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              type="text"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              name="username"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mt-5">
            <Link to="/register" className="text-blue-400 hover:text-blue-600">
              <span>Belum punya akun ? Klik disini</span>
            </Link>
          </div>
          <div className="mt-2 mx-auto">
            <input
              type="submit"
              className="bg-cyan-400 text-center py-3 px-5 text-white hover:bg-cyan-600 rounded"
              value="Login"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
