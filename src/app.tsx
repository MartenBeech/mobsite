import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Headerbar } from "./components/headerbar";
import { Login } from "./components/login";

export const App = () => {
  const [token, setToken] = useState("");
  const [loginName, setLoginName] = useState("");

  if (!token) {
    return <Login setToken={setToken} setLoginName={setLoginName} />;
  }

  return (
    <div className="flex-column">
      <Headerbar loginName={loginName} />
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};
