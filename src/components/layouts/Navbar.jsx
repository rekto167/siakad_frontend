import React from "react";
import { Link } from "react-router-dom";
import tutwurilogo from "../../assets/img/tutwuri.png";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";

const Navbar = ({ logout, isAuthenticated }) => {
  return (
    <nav className="py-2 bg-cyan-500 flex items-center justify-between px-2 text-white">
      <div className="flex">
        <Link to="/">
          <img src={tutwurilogo} className="w-10" />
        </Link>
        <ul className="flex items-center ml-5">
          <li className="mr-3 hover:text-slate-500 focus:text-slate-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-3 hover:text-slate-500 focus:text-slate-500">
            <Link to="/wajibpajak">Nilai</Link>
          </li>
          <li className="mr-3 hover:text-slate-500 focus:text-slate-500">
            <Link to="/objekpajak">Jadwal Pelajaran</Link>
          </li>
          <li className="mr-3 hover:text-slate-500 focus:text-slate-500">
            <Link to="/objekpajak">Guru</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        {isAuthenticated ? (
          <div>
            <a href="#" className="mr-3">
              Username (admin)
            </a>
            <button
              className="bg-cyan-700 hover:bg-cyan-400 focus:bg-cyan-400 py-2 px-4 rounded text-white"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="bg-cyan-700 hover:bg-cyan-400 focus:bg-cyan-400 py-2 px-4 rounded text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
