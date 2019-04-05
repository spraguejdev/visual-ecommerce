import React from "react";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import AdminPage from "./components/AdminPage";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/users",
    component: UsersList,
    exact: true
  },
  {
    path: "/products",
    component: AdminPage,
    exact: true
  }
];
