import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Sidebar } from "./components/sidebar.tsx";
import { Headerbar } from "./components/headerbar.tsx";

ReactDOM.render(
  <div className="flex-column">
    <Headerbar />
    <div className="flex">
      <Sidebar />
    </div>
  </div>,
  document.getElementById("root")
);
