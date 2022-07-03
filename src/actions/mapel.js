import { ADD_MAPEL, ADD_MAPEL_FAIL } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const addMapel = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/create/mapel", formData, config);
    dispatch({
      type: ADD_MAPEL,
      payload: res.data.data,
    });
    dispatch(setAlert(res.data.meta.message, res.data.meta.status));
  } catch (err) {
    dispatch({
      type: ADD_MAPEL_FAIL,
      payload: err,
    });
  }
};
