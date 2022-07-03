import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import classroom from "./classroom";

export default combineReducers({
  auth,
  alert,
  classroom
});
