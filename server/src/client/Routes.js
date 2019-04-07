import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminPage from "./pages/AdminPage";
import App from "./App";

// App is the component that will be shown on all pages
export default [
  {
    ...App,
    routes: [
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
    ]
  }
];
