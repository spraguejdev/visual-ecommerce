import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../reducers/combineReducers.js";

export default req => {
  // Becasue we are accessing our api, we need the full url
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    // We need a default value for our cookie in the case a user makes a request hat is not needed to be authenicated
    // We don't want a header of undefined, if it is, it will crash.
    headers: { cookie: req.get("cookie") || "" }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
