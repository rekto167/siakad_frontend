import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container m-auto w-1/2 mt-5">
      <div className="container rounded bg-white p-10 drop-shadow">
        <h1 className="text-center mb-5">Registrasi</h1>
        <div className="flex flex-col">
          <label for="name">Nama Lengkap</label>
          <input
            type="text"
            className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex flex-col">
          <label for="phone">No.HP</label>
          <input
            type="text"
            className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex flex-col">
          <label for="username">Username</label>
          <input
            type="text"
            className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex flex-col">
          <label for="email">E-mail</label>
          <input
            type="email"
            className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex flex-col">
          <label for="password">Password</label>
          <input
            type="password"
            className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="mt-5">
          <Link to="/login" className="text-blue-400 hover:text-blue-600">
            <span>Sudah punya akun ?</span>
          </Link>
        </div>
        <div className="mt-2 mx-auto">
          <button className="bg-cyan-400 text-center py-3 px-5 text-white hover:bg-cyan-600 rounded">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
