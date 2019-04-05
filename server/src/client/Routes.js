import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminPage from "./pages/AdminPage";

export default [
  {
    path: "/",
    ...HomePage,
    exact: true
  },
  {
    ...UsersListPage,
    path: "/users",
    exact: true
  },
  {
    ...AdminPage,
    path: "/products",
    exact: true
  }
];
