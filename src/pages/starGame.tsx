import react, { useState, useEffect } from "react";
import "../global.css";
// @ts-ignore
import { StarNumber } from "../components/starGame/starNumber.tsx";

export const StarGame = () => {
  const [state, setState] = useState({
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    rows: [1, 2, 3],
    timeLeft: 0,
  });

  return (
    <div className="centered-div">
      <div className="text-size-medium">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="flex-row">
        <div className="box">Box</div>
        <div className="box">
          {state.rows.map((row) => {
            return (
              <div>
                <div>
                  <StarNumber value={row} />
                </div>
                <div>
                  <StarNumber value={row + 3} />
                </div>
                <div>
                  <StarNumber value={row + 6} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-size-medium">Time Remaining: {state.timeLeft}</div>
    </div>
  );
};
