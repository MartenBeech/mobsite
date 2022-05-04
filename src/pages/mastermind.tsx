import React, { useEffect, useState } from "react";
import { MastermindTile } from "../components/mastermind/mastermindTile";

export interface State {
  columns: number;
  rows: number;
  columnsArray: Array<number>;
  rowsArray: Array<number>;
  codeInput: Array<number>;
  guessedInputs: Array<Array<number>>;
  keyCode: Array<number>;
  totalGuesses: number;
}

export function Mastermind() {
  const [state, setState] = useState({
    columns: 5,
    rows: 10,
    columnsArray: [],
    rowsArray: [],
    codeInput: [],
    guessedInputs: [],
    keyCode: [],
    totalGuesses: 0,
  } as State);

  const newData = () => {
    const columnsArray: Array<number> = [];
    const codeInput: Array<number> = [];
    const keyCode: Array<number> = [];
    for (let i = 0; i < state.columns; i++) {
      columnsArray.push(i);
      codeInput.push(-1);
      keyCode.push(Math.floor(Math.random() * 10));
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
    setState({
      ...state,
      guessedInputs: guessedInput,
      totalGuesses: state.totalGuesses + 1,
    });
  };

  return (
    <div className="flex flex-col">
      <div>
        {state.rowsArray.map((y) => {
          return (
            <div className="flex" key={y}>
              {state.columnsArray.map((x) => {
                return (
                  <div key={`${x}-${y}`}>
                    <MastermindTile number={0} />
                  </div>
                );
              })}
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
                  state.codeInput[i] >= 0 && state.codeInput[i] < 10
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
