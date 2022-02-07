import react, { useState, useEffect } from "react";
import "../global.css";
import { VscStarFull } from "react-icons/vsc";

export const StarGame = () => {
  const [state, setState] = useState({
    numbersAvailable: [0],
    numbersInUse: [0],
    numbersCompleted: [0],
    stars: 0,
    sum: 0,
  });
  const [timeState, setTimeState] = useState(0);

  useEffect(() => {
    const numbersAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stars = getNewStars(numbersAvailable);
    setState({
      numbersAvailable: numbersAvailable,
      numbersInUse: [],
      numbersCompleted: [],
      stars: stars,
      sum: 0,
    });
    setTimeState(1000);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(UpdateTime, 10);
    return () => clearTimeout(timerId);
  });

  const handleNumberClick = (value: number) => {
    let numbersAvailable = [...state.numbersAvailable];
    let numbersInUse = [...state.numbersInUse];
    let numbersCompleted = [...state.numbersCompleted];
    let sum = state.sum;
    let stars = state.stars;
    if (getNumberUnused(value)) {
      numbersAvailable = numbersAvailable.filter((number) => number !== value);
      numbersInUse.push(value);
      sum += value;
    } else if (getNumberInUse(value)) {
      numbersInUse = numbersInUse.filter((number) => number !== value);
      numbersAvailable.push(value);
      sum -= value;
    }
    if (sum === state.stars) {
      numbersInUse.map((number) => {
        numbersCompleted.push(number);
      });
      numbersInUse = [];
      sum = 0;
      stars = getNewStars(numbersAvailable);
    }

    setState({
      ...state,
      numbersAvailable: numbersAvailable,
      numbersInUse: numbersInUse,
      numbersCompleted: numbersCompleted,
      sum: sum,
      stars: stars,
    });
  };

  const getNumberUnused = (value: number) => {
    let returnValue = false;
    state.numbersAvailable.map((number) => {
      if (number === value) {
        returnValue = true;
      }
    });
    return returnValue;
  };

  const getNumberInUse = (value: number) => {
    let returnValue = false;
    state.numbersInUse.map((number) => {
      if (number === value) {
        returnValue = true;
      }
    });
    return returnValue;
  };

  const getNumberCompleted = (value: number) => {
    let returnValue = false;
    state.numbersCompleted.map((number) => {
      if (number === value) {
        returnValue = true;
      }
    });
    return returnValue;
  };

  const renderStarNumber = (value: number) => {
    return (
      <div>
        {getNumberUnused(value) ? (
          <button
            className="box-small background-color-gray-dark"
            onClick={() => {
              handleNumberClick(value);
            }}
          >
            {value.toString()}
          </button>
        ) : getNumberInUse(value) && state.sum < state.stars ? (
          <button
            className="box-small background-color-yellow"
            onClick={() => {
              handleNumberClick(value);
            }}
          >
            {value.toString()}
          </button>
        ) : getNumberInUse(value) && state.sum > state.stars ? (
          <button
            className="box-small background-color-red"
            onClick={() => {
              handleNumberClick(value);
            }}
          >
            {value.toString()}
          </button>
        ) : (
          getNumberCompleted(value) && (
            <button className="box-small background-color-green">
              {value.toString()}
            </button>
          )
        )}
      </div>
    );
  };

  const renderStars = (value: number) => {
    if (value <= state.stars) {
      return (
        <div className={"star"}>
          <VscStarFull size={65} />
        </div>
      );
    }
  };

  const getNewStars = (numbersAvailable: number[]) => {
    if (numbersAvailable.length > 0) {
      const possibleAmount = [...numbersAvailable];
      for (let i = 0; i < numbersAvailable.length - 1; i++) {
        for (let j = i + 1; j < numbersAvailable.length; j++) {
          const sum = numbersAvailable[i] + numbersAvailable[j];
          if (sum < 10 && !possibleAmount.includes(sum)) {
            possibleAmount.push(sum);
          }
        }
      }
      const rnd = Math.floor(Math.random() * possibleAmount.length);
      return possibleAmount[rnd];
    }
    return 0;
  };

  const UpdateTime = () => {
    if (timeState > 0 && state.stars > 0) {
      setTimeState(timeState - 1);
    }
  };

  return (
    <div className="centered-div">
      <div className="text-size-medium">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="flex-row">
        {timeState === 0 ? (
          <div className="box">Time out!</div>
        ) : state.stars > 0 ? (
          <div className="box">
            <div>
              <div>{renderStars(1)}</div>
              <div>{renderStars(4)}</div>
              <div>{renderStars(7)}</div>
            </div>
            <div>
              <div>{renderStars(2)}</div>
              <div>{renderStars(5)}</div>
              <div>{renderStars(8)}</div>
            </div>
            <div>
              <div>{renderStars(3)}</div>
              <div>{renderStars(6)}</div>
              <div>{renderStars(9)}</div>
            </div>
          </div>
        ) : (
          <div className="box">You Won!</div>
        )}
        <div className="box">
          <div>
            <div>{renderStarNumber(1)}</div>
            <div>{renderStarNumber(4)}</div>
            <div>{renderStarNumber(7)}</div>
          </div>
          <div>
            <div>{renderStarNumber(2)}</div>
            <div>{renderStarNumber(5)}</div>
            <div>{renderStarNumber(8)}</div>
          </div>
          <div>
            <div>{renderStarNumber(3)}</div>
            <div>{renderStarNumber(6)}</div>
            <div>{renderStarNumber(9)}</div>
          </div>
        </div>
      </div>
      <div className="text-size-medium">
        Time Remaining: {(timeState / 100).toFixed(2)}
      </div>
    </div>
  );
};
