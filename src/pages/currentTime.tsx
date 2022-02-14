import { useState, useEffect } from "react";

export const CurrentTime = (): JSX.Element => {
  const [state, setState] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    UpdateTime();
  }, []);

  const UpdateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    setState({ date: date, time: time });
  };

  setInterval(UpdateTime, 1000);
  return (
    <div className="mt-5 ml-5 text-3xl">{`${state.date} ${state.time}`}</div>
  );
};
