import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers/combineReducers";
import { renderRoutes } from "react-router-config";
import axios from "axios";

// Custom instance of axios
const axiosInstance = axios.create({
  // This will prepend to the endpoint when this function is called.
  baseURL: "/api"
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  // The the axios instance to all of our action creators
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
