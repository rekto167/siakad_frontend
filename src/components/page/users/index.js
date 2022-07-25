import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
} from "@mui/material";

const Users = () => {
  const [formData, setFormData] = useState({
    user: "",
  });
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container mx-auto w-4/5 mt-5">
      <Link
        className="p-2 bg-slate-400 rounded text-white font-semibold"
        to="/dashboard"
      >
        Kembali
      </Link>
      <div className="container mx-auto border rounded p-2 mt-3">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            stickyHeader={true}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">Nama Lengkap</TableCell>
                <TableCell align="center">username</TableCell>
                <TableCell align="center">E-mail</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.data?.map((row, i) => (
                <TableRow>
                  <TableCell key={row.id}>{i + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <Switch onChange={(e) => console.log(row.id)} />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-between mx-auto">
                      <div className="hover:text-cyan-400 hover:cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Users;
