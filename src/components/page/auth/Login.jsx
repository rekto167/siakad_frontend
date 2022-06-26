import React from "react";

const Login = () => {
  return (
    <div className="container m-auto w-1/2 mt-5">
      <div className="container rounded bg-slate-50 p-10 drop-shadow">
        <h1 className="text-center mb-5">Login</h1>
        <div className="flex flex-col">
          <label for="username">Username</label>
          <input
            type="text"
            className="rounded p-3 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex flex-col">
          <label for="password">Password</label>
          <input
            type="password"
            className="rounded p-3 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="mt-10 mx-auto">
          <button className="bg-cyan-400 text-center py-3 px-5 text-white hover:bg-cyan-600 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
