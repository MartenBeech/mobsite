import react, { useState, useEffect } from "react";
import "../../global.css";

interface props {
  value: number;
}

export const StarNumber = (props: props) => {
  const [state, setState] = useState({});

  return (
    <div>
      <div>
        <div className="box-small background-color-gray-dark">
          {props.value.toString()}
        </div>
      </div>
    </div>
  );
};
