import { memo } from "react";

interface props {
  alive: boolean;
  handleClick;
}

const isCellUpdated = (prevProps, nextProps) => {
  return prevProps.alive === nextProps.alive;
};

export const Cell = memo(function Cell(props: props) {
  return (
    <div>
      {props.alive ? (
        <div
          className="w-5 h-5 border cursor-pointer hover:bg-gray-400 bg-black"
          onClick={() => {
            props.handleClick();
          }}
        ></div>
      ) : (
        <div
          className="w-5 h-5 border cursor-pointer hover:bg-gray-300 bg-gray-100"
          onClick={() => {
            props.handleClick();
          }}
        ></div>
      )}
    </div>
  );
}, isCellUpdated);
