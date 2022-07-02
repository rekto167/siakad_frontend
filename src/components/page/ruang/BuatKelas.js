import React, { useEffect, useState } from "react";
import axios from "axios";

const BuatKelas = () => {
  const [formData, setFormData] = useState({
    name: "",
    wali_kelas: "",
  });

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
    // users.data.map((e) => console.log(e))
  }, []);

  return (
    <div className="container w-1/2 m-auto mt-2 border rounded p-2">
      <h2 className="text-center font-semibold">Tambah Kelas</h2>
      <div className="flex flex-col">
        <label>Kelas</label>
        <input
          type="text"
          className="rounded p-2 drop-shadow-sm border-2 border-solid focus:outline-none focus:border-cyan-500"
        />
      </div>
      <div className="flex flex-col">
        <label>Wali Kelas</label>
        <select className="border p-2 rounded">
          <option value="0">Pilih wali kelas</option>
        </select>
      </div>
      <button className="bg-cyan-400 text-center p-2 text-white hover:bg-cyan-600 rounded w-fit mt-5">
        Tambah
      </button>
    </div>
  );
};


export default BuatKelas;
