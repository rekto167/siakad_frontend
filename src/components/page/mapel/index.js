import React from "react";
import { Link } from "react-router-dom";

const Mapel = () => {
  return (
    <div className="container m-auto w-1/2 mt-2">
      <Link
        to="/dashboard"
        className="flex bg-slate-400 text-center py-1 px-1 text-white hover:bg-slate-600 rounded w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
        </svg>
        Back
      </Link>
      <div className="container w-full m-auto border rounded p-2 mt-2">
        <Link
          to="/mapel/tambah"
          className="flex bg-cyan-400 text-center py-1 px-1 text-white hover:bg-cyan-600 rounded w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Tambah
        </Link>
      </div>
    </div>
  );
};

export default Mapel;
