// @ts-nocheck
import { useState, useEffect } from "react";
import { RandomUser } from "../components/randomUser.tsx";

export const RandomUsers = () => {
  const [state, setState] = useState({
    users: [0, 1, 2, 3, 4, 5],
  });

  return (
    <div className="h-max-screen w-screen">
      <div className="flex justify-center mt-8">
        <table className="border-collapse border w-5/6">
          <thead>
            <tr>
              <th className="border border-slate-400 bg-sky-600 w-1/6 h-20 text-xl">
                Image
              </th>
              <th className="border border-slate-400 bg-sky-600 w-1/6 h-20 text-xl">
                Name
              </th>
              <th className="border border-slate-400 bg-sky-600 w-1/6 h-20 text-xl">
                Email
              </th>
              <th className="border border-slate-400 bg-sky-600 w-1/6 h-20 text-xl">
                Login
              </th>
              <th className="border border-slate-400 bg-sky-600 w-1/6 h-20 text-xl">
                Location
              </th>
              <th className="border border-slate-400 bg-sky-600 w-1/6 h-20 text-xl">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user, index) => {
              return <RandomUser index={index} key={user} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
