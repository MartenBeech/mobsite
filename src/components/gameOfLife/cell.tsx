import React, { memo } from "react";

interface props {
  alive: boolean;
  handleClick: () => void;
}

interface props {
  alive: boolean;
}

const isCellUpdated = (prevProps: props, nextProps: props) => {
  return prevProps.alive === nextProps.alive;
};

export const Cell = memo(function Cell(props: props) {
  return (
    <div>
      {props.alive ? (
        <div
          className="w-4 h-4 border cursor-pointer hover:bg-gray-400 bg-black"
          onClick={() => {
            props.handleClick();
          }}
        ></div>
      ) : (
        <div
          className="w-4 h-4 border cursor-pointer hover:bg-gray-300 bg-gray-100"
          onClick={() => {
            props.handleClick();
          }}
        ></div>
      )}
    </div>
  );
}, isCellUpdated);
