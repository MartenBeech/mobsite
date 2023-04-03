import React, { useEffect, useState } from "react";
import { MastermindTile } from "../components/mastermind/mastermindTile";
import { CalculateGuess } from "../components/mastermind/mastermindCalculator";

export interface State {
  columns: number;
  rows: number;
  columnsArray: Array<number>;
  rowsArray: Array<number>;
  codeInput: Array<number>;
  guessedInputs: Array<Array<number>>;
  keyCode: Array<number>;
  totalGuesses: number;
  clues: Array<Array<number>>;
  showCode: boolean;
}

export function Mastermind() {
  const [state, setState] = useState({
    columns: 4,
    rows: 10,
    columnsArray: [],
    rowsArray: [],
    codeInput: [],
    guessedInputs: [],
    keyCode: [],
    totalGuesses: 0,
    clues: [],
    showCode: false,
  } as State);
  const [possibleAnswers, setPossibleAnswers] = useState(0);

  const newData = () => {
    const columnsArray: Array<number> = [];
    const codeInput: Array<number> = [];
    const keyCode: Array<number> = [];
    for (let i = 0; i < state.columns; i++) {
      columnsArray.push(i);
      codeInput.push(-1);
      keyCode.push(Math.floor(Math.random() * state.columns * 2));
    }

    const rowsArray: Array<number> = [];
    for (let i = 0; i < state.rows; i++) {
      rowsArray.push(i);
    }

    const guessedInputs: Array<Array<number>> = [];
    for (let y = 0; y < state.rows; y++) {
      guessedInputs.push([-1]);
      for (let x = 0; x < state.columns; x++) {
        guessedInputs[y][x] = -1;
      }
    }

    setState({
      ...state,
      columnsArray: columnsArray,
      rowsArray: rowsArray,
      codeInput: codeInput,
      keyCode: keyCode,
      guessedInputs: guessedInputs,
      clues: [],
      totalGuesses: 0,
    });

    setPossibleAnswers(Math.pow(10, state.columns));
  };

  useEffect(() => {
    newData();
  }, [state.columns]);

  const putInCode = () => {
    if (state.codeInput.includes(-1)) {
      return;
    }

    const guessedInputs = [...state.guessedInputs];
    for (let i = 0; i < state.columns; i++) {
      guessedInputs[state.totalGuesses][i] = state.codeInput[i];
    }
    const clues = [...state.clues];
    clues.push(
      CalculateGuess({ guess: state.codeInput, keyCode: state.keyCode })
    );
    const codeInput: Array<number> = [];
    for (let i = 0; i < state.codeInput.length; i++) {
      codeInput.push(-1);
    }

    const totalGuesses = state.totalGuesses + 1;

    setState({
      ...state,
      guessedInputs: guessedInputs,
      totalGuesses: totalGuesses,
      clues: clues,
      codeInput: codeInput,
    });

    const combinations = Math.pow(10, state.columns);
    let possibleAnswersCopy = 0;
    for (let i = 0; i < combinations; i++) {
      let isFitting = true;
      for (let row = 0; row < totalGuesses; row++) {
        const paddedNumber = i.toString().padStart(state.columns, "0");
        const guessString = paddedNumber.split("");
        const guessNumber: number[] = [];
        guessString.map((char) => {
          guessNumber.push(parseInt(char));
        });
        const result = CalculateGuess({
          guess: guessNumber,
          keyCode: guessedInputs[row],
        });
        if (result[0] != clues[row][0] || result[1] != clues[row][1]) {
          isFitting = false;
        }
      }
      if (isFitting) {
        possibleAnswersCopy++;
      }
    }

    setPossibleAnswers(possibleAnswersCopy);
  };

  return (
    <div className="flex flex-col">
      <div>
        {state.rowsArray.map((y, index) => {
          return (
            <div className="flex items-center" key={y}>
              {state.columnsArray.map((x) => {
                return (
                  <div key={`${x}-${y}`}>
                    <MastermindTile number={state.guessedInputs[y][x]} />
                  </div>
                );
              })}

              {state.clues[index] && (
                <div className="flex">
                  {state.clues[index].map((clue, index) => {
                    const clueArray: Array<number> = [];
                    for (let i = 0; i < clue; i++) {
                      clueArray.push(i);
                    }
                    return (
                      <div className="flex" key={index}>
                        {clueArray.map((clue) => {
                          return (
                            <div key={clue}>
                              {index === 0 ? (
                                <div
                                  className="border border-black w-5 h-5 m-1 bg-green-500"
                                  key={clue}
                                ></div>
                              ) : (
                                <div
                                  className="border border-black w-5 h-5 m-1 bg-yellow-500"
                                  key={clue}
                                ></div>
                              )}
                            </div>
                          );
                        })}{" "}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex">
        {state.columnsArray.map((x, index) => {
          return (
            <div className="flex" key={x}>
              <div className="flex justify-center items-center mt-2 mr-4 text-5xl w-16 h-16 border border-black rounded">
                {state.showCode ? state.keyCode[index] : "?"}
              </div>
            </div>
          );
        })}
        <button
          className="mt-2 mr-4 px-4 text-xl w-32 h-16 border border-black bg-mob-blue-dark text-white hover:bg-mob-blue-light rounded-xl"
          onClick={() => {
            setState({ ...state, showCode: !state.showCode });
          }}
        >
          Show Code
        </button>
      </div>
      <div className="flex mt-16">
        {state.columnsArray.map((i) => {
          return (
            <div className="flex justify-center items-center" key={i}>
              <input
                className="mt-2 mr-4 px-4 text-5xl w-16 h-16 border border-black rounded"
                value={
                  state.codeInput[i] < state.columns * 2 &&
                  state.codeInput[i] >= 0
                    ? state.codeInput[i]
                    : ""
                }
                placeholder="__"
                onChange={(event) => {
                  const codeInput = [...state.codeInput];
                  codeInput[i] = parseInt(event.target.value);
                  codeInput[i] =
                    codeInput[i] % 10 < state.columns * 2 &&
                    codeInput[i] % 10 >= 0
                      ? codeInput[i] % 10
                      : -1;
                  setState({ ...state, codeInput: codeInput });
                }}
              ></input>
            </div>
          );
        })}
        <button
          className={`mt-2 mr-4 px-4 text-xl w-32 h-16 border border-black bg-mob-blue-dark text-white  rounded-xl ${
            state.codeInput.includes(-1)
              ? "opacity-50 cursor-default"
              : "hover:bg-mob-blue-light"
          }`}
          onClick={() => {
            putInCode();
          }}
        >
          Guess
        </button>
        <div className="flex items-center h-16 mt-2 mr-4 px-4 text-xl">
          {`(${possibleAnswers} possible answers)`}
        </div>
      </div>
      <div className="mt-4">
        <p>{`Type in a ${state.columns} digit code here of numbers 0-${
          state.columns * 2 - 1
        }.`}</p>
        <p>{`After pressing Guess, hints will show up about the actual code.`}</p>
        <p>{`Green hint: You have a correct number on a correct space.`}</p>
        <p>{`Yellow hint: You have a correct number on a wrong space.`}</p>
        <div className="flex items-center mt-4">
          <button
            className="mt-2 mr-8 px-4 text-xl w-32 h-16 border border-black bg-mob-blue-dark text-white hover:bg-mob-blue-light rounded-xl"
            onClick={() => {
              newData();
            }}
          >
            New Game
          </button>
          <p>Columns:</p>
          <button
            className={`mt-2 ml-4 mr-4 px-4 text-xl w-16 h-16 border border-black bg-mob-blue-dark text-white rounded-xl ${
              state.columns === 3
                ? "opacity-50 cursor-default"
                : "hover:bg-mob-blue-light"
            }`}
            onClick={() => {
              setState({ ...state, columns: 3 });
            }}
          >
            3
          </button>
          <button
            className={`mt-2 ml-4 mr-4 px-4 text-xl w-16 h-16 border border-black bg-mob-blue-dark text-white  rounded-xl ${
              state.columns === 4
                ? "opacity-50 cursor-default"
                : "hover:bg-mob-blue-light"
            }`}
            onClick={() => {
              setState({ ...state, columns: 4 });
            }}
          >
            4
          </button>
          <button
            className={`mt-2 ml-4 mr-4 px-4 text-xl w-16 h-16 border border-black bg-mob-blue-dark text-white rounded-xl ${
              state.columns === 5
                ? "opacity-50 cursor-default"
                : "hover:bg-mob-blue-light"
            }`}
            onClick={() => {
              setState({ ...state, columns: 5 });
            }}
          >
            5
          </button>
        </div>
      </div>
    </div>
  );
}
