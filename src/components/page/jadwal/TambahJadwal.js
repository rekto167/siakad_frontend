import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import axios from "axios";
// import TimePicker from "react-time-picker";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { tambahJadwal } from "../../../actions/jadwal";

const TambahJadwal = ({ tambahJadwal }) => {
  const [formData, setFormData] = useState({
    guru: "",
    kelas: "",
    mapel: "",
    hari: "",
    waktu_awal: "",
    waktu_akhir: "",
  });
  const [users, setUsers] = useState();
  const [kelas, setKelas] = useState();
  const [mapels, setMapels] = useState();
  const [days, setDays] = useState();
  const [time, setTime] = useState();
  const [time2, setTime2] = useState();

  const { guru, classroom, mapel, hari, waktu_awal, waktu_akhir } = formData;

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

  const getDays = async () => {
    const res = await axios.get("/api/list/days");
    setDays(res.data.data);
  };

  useEffect(() => {
    getusers();
    getKelas();
    getMapel();
    getDays();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    tambahJadwal(formData);
    pindah();
  };

  const pindah = () => {
    return <Navigate to="/jadwal" />;
  };

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
      <form>
        <div className="mt-3 flex flex-col">
          <label htmlFor="guru">Guru</label>
          <select
            name="guru"
            id="guru"
            className="p-2 rounded bg-white border focus:border-cyan-300"
            onChange={(e) => handleChange(e)}
          >
            <option value="0">Pilih guru</option>
            {users?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3 flex flex-col">
          <label htmlFor="mapel">Mata Pelajaran</label>
          <select
            name="mapel"
            id="mapel"
            className="p-2 rounded bg-white border focus:border-cyan-300"
            onChange={(e) => handleChange(e)}
          >
            <option value="0">Pilih mata pelajaran</option>
            {mapels?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3 flex flex-col">
          <label htmlFor="kelas">Kelas</label>
          <select
            name="kelas"
            id="kelas"
            className="p-2 rounded bg-white border focus:border-cyan-300"
            onChange={(e) => handleChange(e)}
          >
            <option value="0">Pilih kelas</option>
            {kelas?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3 flex flex-col">
          <label htmlFor="hari">Hari</label>
          <select
            name="hari"
            id="hari"
            className="p-2 rounded bg-white border focus:border-cyan-300"
            onChange={(e) => handleChange(e)}
          >
            <option value="0">Pilih hari</option>
            {days?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3 flex flex-row justify-between">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Jam Mulai"
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
                setFormData({
                  ...formData,
                  waktu_awal: `${newValue.getHours()}:${newValue.getMinutes()}`,
                });
              }}
              renderInput={(params) => <TextField {...params} />}
              ampm={false}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Jam Berakhir"
              value={time2}
              onChange={(newValue) => {
                setTime2(newValue);
                setFormData({
                  ...formData,
                  waktu_akhir: `${newValue.getHours()}:${newValue.getMinutes()}`,
                });
              }}
              renderInput={(params) => <TextField {...params} />}
              ampm={false}
            />
          </LocalizationProvider>
        </div>
        <button
          className="bg-cyan-400 p-2 text-white mt-5 rounded"
          onClick={(e) => onSubmit(e)}
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

TambahJadwal.propTypes = {
  tambahJadwal: PropTypes.func.isRequired,
};

export default connect(null, { tambahJadwal })(TambahJadwal);
