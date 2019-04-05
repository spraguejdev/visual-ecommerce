import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";
import AdminPage from "./pages/AdminPage";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersListPage,
    exact: true
  },
  {
    // loadData,
    path: "/products",
    component: AdminPage,
    exact: true
  }
];
