import { useState } from "react";

export const Incrementer = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  interface buttonProps {
    increment: number;
  }

  const Button = (props: buttonProps) => {
    return (
      <>
        <button
          className="border mr-2 bg-gray-100 w-16"
          onClick={() => {
            setCounter(counter + props.increment);
          }}
        >
          {`+${props.increment}`}
        </button>
      </>
    );
  };

  interface displayProps {
    value: number;
  }

  const Display = (props: displayProps) => {
    return <div className="text-3xl mt-5 ml-10">{props.value}</div>;
  };

  return (
    <div>
      <Button {...{ increment: 1 }} />
      <Button {...{ increment: 5 }} />
      <Button {...{ increment: 10 }} />
      <Button {...{ increment: 100 }} />
      <Display {...{ value: counter }} />
    </div>
  );
};
