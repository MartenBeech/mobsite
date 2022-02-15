import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Sidebar } from "./components/sidebar.tsx";
import { Headerbar } from "./components/headerbar.tsx";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex-column">
      <Headerbar />
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
