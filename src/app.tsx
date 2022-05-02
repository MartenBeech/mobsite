import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Login } from "./components/login";

export const App = () => {
  const [token, setToken] = useState("");
  const [loginName, setLoginName] = useState("");

  if (!token) {
    return <Login setToken={setToken} setLoginName={setLoginName} />;
  }

  return (
    <div className="h-screen w-screen">
      <Sidebar loginName={loginName} />
    </div>
  );
};
