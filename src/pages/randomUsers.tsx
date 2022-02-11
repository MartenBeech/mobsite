// @ts-nocheck
import { useState, useEffect } from "react";
import { RandomUser } from "../components/randomUser.tsx";

export const RandomUsers = () => {
  const [state, setState] = useState({
    users: [0, 1, 2, 3, 4, 5],
  });

  return (
    <div className="flex justify-center mt-8">
      <table className="border-collapse border w-5/6">
        <thead>
          <tr>
            <th className="border border-slate-300 w-1/6">Image</th>
            <th className="border border-slate-300 w-1/6">Name</th>
            <th className="border border-slate-300 w-1/6">Email</th>
            <th className="border border-slate-300 w-1/6">Login</th>
            <th className="border border-slate-300 w-1/6">Location</th>
            <th className="border border-slate-300 w-1/6">Phone</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => {
            return <RandomUser key={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
