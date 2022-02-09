import react, { useState, useEffect } from "react";
import "../../global.css";

interface props {
  alive: boolean;
}

export const Cell = (props: props) => {
  const [state, setState] = useState({
    alive: props.alive,
  });

  return (
    <div>
      {props.alive ? (
        <div className="cell-alive"></div>
      ) : (
        <div className="cell-dead"></div>
      )}
    </div>
  );
};
