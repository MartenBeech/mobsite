// @ts-nocheck
import { useState, useEffect } from "react";
import { RandomUser } from "../components/randomUser.tsx";

export const RandomUsers = () => {
  const [state, setState] = useState({
    users: [0, 0, 0, 0, 0, 0],
  });

  return (
    <div>
      {state.users.map((user) => {
        return <RandomUser />;
      })}
    </div>
  );
};
