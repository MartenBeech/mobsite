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
  } as State);

  const newData = () => {
    const columnsArray: Array<number> = [];
    const codeInput: Array<number> = [];
    const keyCode: Array<number> = [];
    for (let i = 0; i < state.columns; i++) {
      columnsArray.push(i);
      codeInput.push(-1);
      keyCode.push(Math.floor(Math.random() * 8));
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
    const guessedInput = [...state.guessedInputs];
    for (let i = 0; i < state.columns; i++) {
      guessedInput[state.totalGuesses][i] = state.codeInput[i];
    }
    const clues = [...state.clues];
    clues.push(
      CalculateGuess({ guess: state.codeInput, keyCode: state.keyCode })
    );

    setState({
      ...state,
      guessedInputs: guessedInput,
      totalGuesses: state.totalGuesses + 1,
      clues: clues,
      codeInput: [-1, -1, -1, -1, -1],
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
      <div className="flex mt-16">
        {state.columnsArray.map((i) => {
          return (
            <div className="flex justify-center items-center" key={i}>
              <input
                className="mt-2 mr-4 px-4 text-5xl w-16 h-16 border border-black"
                value={
                  state.codeInput[i] >= 0 && state.codeInput[i] < 8
                    ? state.codeInput[i]
                    : ""
                }
                onChange={(event) => {
                  const codeInput = [...state.codeInput];
                  codeInput[i] = parseInt(event.target.value);
                  setState({ ...state, codeInput: codeInput });
                }}
              ></input>
            </div>
          );
        })}
        <button
          className="mt-2 mr-4 px-4 text-xl w-32 h-16 border border-black bg-mob-blue-dark text-white hover:bg-mob-blue-light"
          onClick={() => {
            putInCode();
          }}
        >
          Guess
        </button>
      </div>
    </div>
  );
}
