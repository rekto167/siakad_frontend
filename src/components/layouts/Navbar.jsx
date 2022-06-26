import React from "react";
import { Link } from "react-router-dom";
import tutwurilogo from "../../assets/img/tutwuri.png";

const Navbar = () => {
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
        <a href="#" className="mr-3">
          Username (admin)
        </a>
        <button className="bg-cyan-700 hover:bg-cyan-400 focus:bg-cyan-400 py-2 px-4 rounded text-white">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
