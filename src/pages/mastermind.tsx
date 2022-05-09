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
    });
  };

  useEffect(() => {
    newData();
  }, [state.columns]);

  const putInCode = () => {
    for (let i = 0; i < state.codeInput.length; i++) {
      if (state.codeInput[i] === -1) {
        return;
      }
    }
    const guessedInput = [...state.guessedInputs];
    for (let i = 0; i < state.columns; i++) {
      guessedInput[state.totalGuesses][i] = state.codeInput[i];
    }
    const clues = [...state.clues];
    clues.push(
      CalculateGuess({ guess: state.codeInput, keyCode: state.keyCode })
    );
    const codeInput: Array<number> = [];
    for (let i = 0; i < state.codeInput.length; i++) {
      codeInput.push(-1);
    }

    setState({
      ...state,
      guessedInputs: guessedInput,
      totalGuesses: state.totalGuesses + 1,
      clues: clues,
      codeInput: codeInput,
    });
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
          Show code
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
          className="mt-2 mr-4 px-4 text-xl w-32 h-16 border border-black bg-mob-blue-dark text-white hover:bg-mob-blue-light rounded-xl"
          onClick={() => {
            putInCode();
          }}
        >
          Guess
        </button>
      </div>
      <div className="mt-4">
        <div>{`Type in a ${state.columns} digit code here of numbers 0-${
          state.columns * 2 - 1
        }.`}</div>
        <div>{`After pressing Guess, hints will show up about the actual code.`}</div>
        <div>{`Green hint: You have a correct number on a correct space.`}</div>
        <div>{`Yellow hint: You have a correct number on a wrong space.`}</div>
      </div>
    </div>
  );
}
