import { setAlert } from "./alert";
import { CREATE_CLASS_FAIL, CREATE_CLASS_SUCCESS } from "./types";
import axios from "axios";

export const createClassroom = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/create/kelas", formData, config);

    dispatch({
      type: CREATE_CLASS_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert(res.data.meta.message, res.data.meta.status));
  } catch (err) {
    dispatch({ type: CREATE_CLASS_FAIL, payload: err });
    dispatch(setAlert("Gagal menambahkan kelas", "error"));
  }
};
