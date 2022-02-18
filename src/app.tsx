// @ts-nocheck
import { useState } from "react";
import { Sidebar } from "./components/sidebar.tsx";
import { Headerbar } from "./components/headerbar.tsx";
import { Login } from "./components/login.tsx";

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
