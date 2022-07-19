import React from "react";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT,
  SET_ALERT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import { Navigate, useNavigate } from "react-router-dom";

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
    dispatch(setAlert(res.data.meta.message, res.data.meta.status));
    dispatch(loadUser());
    console.log(res.data);
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response });
    dispatch(setAlert(err.response.statusText, "error"));
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
