import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import classroom from "./classroom";
import mapel from "./mapel";

export default combineReducers({
  auth,
  alert,
  classroom,
  mapel,
});
