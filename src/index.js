import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./custom.css";
// import App from "./App";
import { RouterProvider } from "react-router-dom";
import { AppLayout } from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppLayout} />);
