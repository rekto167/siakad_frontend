import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import axios from "axios";

const TambahJadwal = () => {
  const [formData, setFormData] = useState({
    guru: "",
    kelas: "",
  });
  const [users, setUsers] = useState();
  const [kelas, setKelas] = useState();
  const [mapels, setMapels] = useState();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getusers = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data.data);
  };

  const getKelas = async () => {
    const res = await axios.get("/api/list/classes");
    setKelas(res.data.data);
  };

  const getMapel = async () => {
    const res = await axios.get("/api/list/mapels");
    setMapels(res.data.data);
  };

  useEffect(() => {
    getusers();
    getKelas();
    getMapel();
  }, []);

  // useEffect(() => {
  // }, [formData]);

  return (
    <div className="container w-1/2 m-auto border rounded p-2 mt-5">
      <Link
        to="/jadawal"
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
      <h2 className="text-center font-semibold">Tambah Jadwal Pelajaran</h2>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="guru">Guru</InputLabel>
          <Select
            labelId="guru"
            id="guru"
            name="guru"
            label="Guru"
            onChange={(e) => handleChange(e)}
          >
            {users?.map((e) => (
              <MenuItem value={e.id}>{e.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="mt-2">
          <FormControl fullWidth classes="mt-2">
            <InputLabel id="kelas">Kelas</InputLabel>
            <Select
              labelId="kelas"
              id="kelas"
              name="kelas"
              label="Kelas"
              onChange={(e) => handleChange(e)}
            >
              {kelas?.map((e) => (
                <MenuItem value={e.id}>{e.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mt-2">
          <FormControl fullWidth classes="mt-2">
            <InputLabel id="mapel">Mata Pelajaran</InputLabel>
            <Select
              labelId="mapel"
              id="mapel"
              name="mapel"
              label="Mata Pelajaran"
              onChange={(e) => handleChange(e)}
            >
              {mapels?.map((e) => (
                <MenuItem value={e.id}>{e.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>
    </div>
  );
};

export default TambahJadwal;
