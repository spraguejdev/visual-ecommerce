import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import ProductsPage from "./pages/ProductsPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

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
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...UsersListPage,
        path: "/users",
        exact: true
      },
      {
        ...ProductsPage,
        path: "/products",
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
