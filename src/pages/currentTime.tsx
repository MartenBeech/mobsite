import React, { useState, useEffect } from "react";

export const CurrentTime = (): JSX.Element => {
  const now = new Date();
  const [state, setState] = useState({
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  });

  useEffect(() => {
    const timerId = setTimeout(() => UpdateTime(), 1000);
    return () => clearTimeout(timerId);
  });

  const UpdateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    setState({ date: date, time: time });
  };

  return (
    <div className="mt-5 ml-5 text-3xl">{`${state.date} ${state.time}`}</div>
  );
};
