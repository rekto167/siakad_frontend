import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/user");
    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Tyep": "application/json",
    },
  };
  try {
    const res = await axios.post(`/api/login`, formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(`/api/register`, formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
