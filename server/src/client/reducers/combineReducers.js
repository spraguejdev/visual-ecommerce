import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  auth: authReducer
});
