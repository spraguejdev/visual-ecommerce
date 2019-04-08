import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions/index";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // Load data gets called with our redux store and the dispatch function, return the results of a dispatch function
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
