import React, { useState } from "react";
import buffer from "buffer";

interface loginProps {
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setLoginName: React.Dispatch<React.SetStateAction<string>>;
}

export function Login(props: loginProps) {
  const [username, setUserName] = useState("Mr. User");
  const [password, setPassword] = useState("thisisapassword");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const buff = buffer.Buffer.from(`${username}:${password}`).toString(
      "base64"
    );
    const basicAuth = `Basic ${buff}`;
    const token = basicAuth;
    props.setToken(token);
    props.setLoginName(username);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex-column bg-blue-400 w-1/3 rounded-2xl">
        <div className="flex justify-center text-2xl mt-8">Please Log In</div>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="flex justify-center mt-8 text-lg">Username</div>
            <div className="flex justify-center">
              <input
                className="border w-1/2 rounded-lg"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </label>
          <label>
            <div className="flex justify-center mt-8 text-lg">Password</div>
            <div className="flex justify-center">
              <input
                className="border w-1/2 rounded-lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
          <div className="flex justify-center">
            <button
              className="mt-8 border bg-gray-100 mb-8 w-1/4 rounded-lg"
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
