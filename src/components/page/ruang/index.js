import React from "react";
import { Link } from "react-router-dom";

const Ruang = () => {
  return (
    <div className="container w-1/2 m-auto mt-2">
      <Link
        to="/kelas/buat"
        className="flex bg-cyan-400 text-center py-3 px-5 text-white hover:bg-cyan-600 rounded w-fit"
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
        Tambah Kelas
      </Link>
      <h1>List Kelas</h1>
    </div>
  );
};

export default Ruang;
