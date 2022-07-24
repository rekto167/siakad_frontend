import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getuser } from "../../../actions/auth";
import axios from "axios";

const GetUser = ({ getuser, user }) => {
  const { userId } = useParams();

  useEffect(() => {
    getuser(userId);
  }, [getuser]);

  return (
    <div className="container mx-auto w-4/5 mt-5">
      <Link to="/users" className="p-2 bg-slate-400 text-white font-semibold">
        Kembali
      </Link>
      <div className="container mt-3">
        <h3 className="text-center font-semibold text-3xl">User Detail</h3>
        <div className="container border  px-2 py-5 mt-2">
          <div className="container flex flex-row">
            <div>
              <img src={user.profile_photo_url} className="h-52 w-52" />
              <div className="flex flex-row justify-evenly mt-2">
                <button className="bg-green-300 p-1 text-white hover:bg-green-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </button>
                <button className="bg-red-300 p-1 text-white hover:bg-red-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </button>
              </div>
            </div>
            <div className="ml-5">
              <table>
                <tr>
                  <td>Nama Lengkap</td>
                  <td>:</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>username</td>
                  <td>:</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>:</td>
                  <td>{user.email}</td>
                </tr>
                <td>
                  <td>Status</td>
                  <td>:</td>
                  <td>{user.status ? "Aktif" : "Belum Aktif"} </td>
                </td>
              </table>
            </div>
          </div>
          <div className="mt-5">
            <Link to="/users" className="p-2 bg-red-500  border text-white">
              Hapus
            </Link>
            <Link
              to={`/users/edit/${user.id}`}
              className="p-2 bg-green-500  border text-white"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

GetUser.propType = {
  getuser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { getuser })(GetUser);
