import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMapel } from "../../../actions/mapel";

const TambahMapel = ({ addMapel }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addMapel(formData);
  };

  return (
    <div className="container w-1/2 m-auto mt-2">
      <h1 className="text-center font-semibold">Tambah Mata Pelajaran</h1>
      <form className="border rounded p-2" onSubmit={(e) => onSubmit(e)}>
        <div className="flex flex-col">
          <label>Nama Mata Pelajaran</label>
          <input
            type="text"
            placeholder="ex: Bahasa Inggris"
            className="p-2 border rounded focus:outline-none focus:border-cyan-500"
            name="name"
            onChange={(e) => onChange(e)}
          />
        </div>
        <button
          className="flex bg-cyan-300 p-1 rounded text-white mt-10 hover:bg-cyan-500"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Tambah
        </button>
      </form>
    </div>
  );
};

TambahMapel.propTypes = {
  addMapel: PropTypes.func.isRequired,
};

export default connect(null, { addMapel })(TambahMapel);
