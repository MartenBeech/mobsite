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
  return <div>{`${state.date} ${state.time}`}</div>;
};
