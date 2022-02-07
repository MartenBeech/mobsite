import react, { useState, useEffect } from "react";
import "../global.css";
import { VscStarFull } from "react-icons/vsc";

export const StarGame = () => {
  const [state, setState] = useState({
    numbersUnused: [0],
    numbersInUse: [0],
    numbersCompleted: [0],
    stars: 0,
    sum: 0,
  });
  const [timeState, setTimeState] = useState(0);

  useEffect(() => {
    const numbersUnused = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stars = getNewStars(numbersUnused);
    setState({
      numbersUnused: numbersUnused,
      numbersInUse: [],
      numbersCompleted: [],
      stars: stars,
      sum: 0,
    });
  }, []);

  const handleNumberClick = (value: number) => {
    let numbersUnused = [...state.numbersUnused];
    let numbersInUse = [...state.numbersInUse];
    let numbersCompleted = [...state.numbersCompleted];
    let sum = state.sum;
    let stars = state.stars;
    if (getNumberUnused(value)) {
      numbersUnused = numbersUnused.filter((number) => number !== value);
      numbersInUse.push(value);
      sum += value;
    } else if (getNumberInUse(value)) {
      numbersInUse = numbersInUse.filter((number) => number !== value);
      numbersUnused.push(value);
      sum -= value;
    }
    if (sum === state.stars) {
      numbersInUse.map((number) => {
        numbersCompleted.push(number);
      });
      numbersInUse = [];
      sum = 0;
      stars = getNewStars(numbersUnused);
    }

    setState({
      ...state,
      numbersUnused: numbersUnused,
      numbersInUse: numbersInUse,
      numbersCompleted: numbersCompleted,
      sum: sum,
      stars: stars,
    });
  };

  const getNumberUnused = (value: number) => {
    let returnValue = false;
    state.numbersUnused.map((number) => {
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

  const getNewStars = (numbersUnused: number[]) => {
    if (numbersUnused.length > 0) {
      const possibleAmount = [...numbersUnused];

      for (let i = 0; i < numbersUnused.length - 1; i++) {
        for (let j = i + 1; j < numbersUnused.length; j++) {
          const sum = numbersUnused[i] + numbersUnused[j];
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
    setTimeState(timeState - 1);
  };

  // setInterval(UpdateTime, 1000);

  return (
    <div className="centered-div">
      <div className="text-size-medium">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="flex-row">
        {state.stars > 0 ? (
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
          <div className="box">You Won</div>
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
      <div className="text-size-medium">Time Remaining: {timeState}</div>
    </div>
  );
};
