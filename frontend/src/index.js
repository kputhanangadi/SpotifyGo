import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import SelectionGrid from "./routes/selection";
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
    element: <SelectionGrid />,
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

// function getDistance(origin, destination) {
//   const API_KEY = 'AIzaSyDyOukcRQcB-UUFagu2LGt_nm137umn2k8';
//   const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${API_KEY}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const distance = data.rows[0].elements[0].distance.text;
//       console.log(`The distance between ${origin} and ${destination} is ${distance}.`);
//     })
//     .catch(error => console.error(error));
// }
