import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import CountryDetails from "./components/CountryDetails.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/country/:countryName",
//     element: <CountryDetails />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App />
  </React.StrictMode>
);
