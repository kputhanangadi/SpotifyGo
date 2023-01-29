import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import SelectionPage from "./routes/selection";
import ErrorPage from "./routes/error";
import DestinationPage from "./routes/destination";
import GeneratePage from "./routes/generate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/destination",
    element: <DestinationPage />,
  },
  {
    path: "/selection",
    element: <SelectionPage />,
  },
  {
    path: "/generate",
    element: <GeneratePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
