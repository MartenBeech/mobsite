import React, { useState, useEffect } from "react";
import {
  GetClear,
  GetBlinker,
  GetAcorn,
  GetDieHard,
  GetPulsar,
  GetGlider,
  GetTheRPentomino,
  GetSpaceship,
  GetRandom,
} from "../components/gameOfLife/pattern";
import { Cell } from "../components/gameOfLife/cell";
import { SetNewCellConditions } from "../components/gameOfLife/cellCondition";

export const DIMENTIONS = 50;

export interface State {
  columns: number[];
  rows: number[];
  alive: boolean[][];
  speed: number;
  started: boolean;
  evolutions: number;
}

export const GameOfLife = () => {
  const [state, setState] = useState({
    columns: [0],
    rows: [0],
    alive: [[false]],
    speed: 3,
    started: false,
    evolutions: 0,
  } as State);
  useEffect(() => {
    const columns: Array<number> = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      columns.push(i);
    }

    const rows: Array<number> = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      rows.push(i);
    }

    const alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    setState({ ...state, columns: columns, rows: rows, alive: alive });
  }, []);

  useEffect(() => {
    if (state.started) {
      const timerId = setTimeout(
        () => SetNewCellConditions({ state, setState }),
        2048 / Math.pow(2, state.speed)
      );
      return () => clearTimeout(timerId);
    }
  });

  const updateSpeed = (faster: boolean) => {
    let newSpeed = state.speed;
    faster ? newSpeed++ : newSpeed--;
    if (newSpeed < 1) {
      newSpeed = 1;
    }
    if (newSpeed > 9) {
      newSpeed = 9;
    }
    setState({ ...state, speed: newSpeed });
  };

  interface handleCellClickProps {
    column: number;
    row: number;
  }

  const handleCellClick = (props: handleCellClickProps) => {
    state.alive[props.column][props.row] =
      !state.alive[props.column][props.row];
    setState({ ...state, alive: state.alive });
  };

  return (
    <div className="flex mt-4">
      <div className="mr-4">
        {state.columns.map((column: number) => {
          return (
            <div key={column} className="flex">
              {state.rows.map((row: number) => {
                return (
                  <Cell
                    key={`${column}-${row}`}
                    alive={state.alive[column][row]}
                    handleClick={() => {
                      handleCellClick({ column, row });
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="w-96">
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3"
            onClick={() => {
              setState({ ...state, started: !state.started });
            }}
          >
            {state.started ? "Pause" : "Start"}
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetClear();
              setState({ ...state, alive, evolutions: 0, started: false });
            }}
          >
            Clear
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/12 mt-4"
            onClick={() => {
              updateSpeed(false);
            }}
          >
            -
          </button>
          <button className="border border-slate-300 bg-gray-100 w-1/6 cursor-default">
            Spd: {state.speed}
          </button>
          <button
            className="border border-slate-300 bg-gray-100 w-1/12"
            onClick={() => {
              updateSpeed(true);
            }}
          >
            +
          </button>
        </div>
        <div>
          <div className="w-1/3 mb-4">Evolutions: {state.evolutions}</div>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetBlinker();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Blinker
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetPulsar();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Pulsar
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetGlider();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Glider
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetTheRPentomino();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            R-pentomino
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetDieHard();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Die Hard
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetAcorn();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Acorn
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetSpaceship();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Spaceship
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              const alive = GetRandom();
              setState({ ...state, alive, evolutions: 0 });
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};
