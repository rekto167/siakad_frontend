import { TAMBAH_JADWAL, TAMBAH_JADWAL_GAGAL } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const tambahJadwal = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/create/jadwal", formData, config);
    dispatch({
      type: TAMBAH_JADWAL,
      payload: res.data,
    });
    dispatch(setAlert(`${res.data.meta.message}`, res.data.meta.status));
  } catch (err) {
    console.log(err);
    dispatch({
      type: TAMBAH_JADWAL_GAGAL,
      payload: err,
    });
    dispatch(setAlert("Gagal menambahkan jadwal", "error"));
  }
};
