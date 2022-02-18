import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export function Login({ setToken, setLoginName }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    setLoginName(username);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex-column bg-blue-400 w-1/3">
        <div className="flex justify-center text-2xl mt-8">Please Log In</div>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="flex justify-center mt-8 text-lg">Username</div>
            <div className="flex justify-center">
              <input
                className="border w-1/2"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </label>
          <label>
            <div className="flex justify-center mt-8 text-lg">Password</div>
            <div className="flex justify-center">
              <input
                className="border w-1/2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
          <div className="flex justify-center">
            <button
              className="mt-8 border bg-gray-100 mb-8 w-1/4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
