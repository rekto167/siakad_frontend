import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Modal,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { connect } from "react-redux";
import { createClassroom } from "../../../actions/classroom";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #67E8F9",
  boxShadow: 24,
  p: 4,
};

const BuatKelas = ({ createClassroom }) => {
  const columns = [
    {
      field: "name",
      headerName: "Nama",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "No HP",
      width: 150,
      editable: true,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    wali_kelas: "",
  });

  const { name, wali_kelas } = formData;

  const [users, setUsers] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUsers = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data.data);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    createClassroom(formData);
  };

  return (
    <div className="container w-1/2 m-auto mt-2 border rounded p-2">
      <h2 className="text-center font-semibold">Tambah Kelas</h2>
      <div className="flex flex-col">
        <label>Kelas</label>
        <input
          type="text"
          name="name"
          className="rounded p-2 border-2 border-solid focus:outline-none focus:border-cyan-500"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="flex w-full flex-col"></div>
      <div className="flex flex-col w-full">
        <label>Wali Kelas</label>
        <div className="relative">
          <input
            type="text"
            className="appearance-none p-2 border-2 border-solid focus:outline-none focus:border-cyan-500 rounded text-lg placeholder:text-greyColor w-full lg:w-full"
            value={wali_kelas}
          />
          <button
            type="button"
            className="absolute right-0 top-0 bg-cyan-300 h-full text-white w-14 hover:bg-cyan-500 rounded-r-lg"
            data-modal-toggle="modal-guru"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 items-center m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={users}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  name="wali_kelas"
                  onSelectionModelChange={(e) =>
                    setFormData({ ...formData, wali_kelas: e[0] })
                  }
                />
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <button
        type="submit"
        onClick={(e) => onSubmit(e)}
        className="bg-cyan-400 text-center p-2 text-white hover:bg-cyan-600 rounded w-fit mt-5"
      >
        Tambah
      </button>
    </div>
  );
};

BuatKelas.propTypes = {
  createClassroom: PropTypes.func.isRequired,
};

export default connect(null, { createClassroom })(BuatKelas);
