import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import classroom from "./classroom";
import mapel from "./mapel";
import jadwal from "./jadwal";

export default combineReducers({
  auth,
  alert,
  classroom,
  mapel,
  jadwal
});
