import { combineReducers } from "redux";
import { login } from "./login";
import { instances } from "./instances";
import { servers } from "./servers";

export default combineReducers({
  login,
  instances,
  servers
});
