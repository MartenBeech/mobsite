// @ts-nocheck
import { useState, useEffect } from "react";
import {
  HandleBlinker,
  HandleAcorn,
  HandleDieHard,
  HandlePulsar,
  HandleGlider,
  HandleTheRPentomino,
  HandleRandom,
} from "../components/gameOfLife/pattern.tsx";
import { Cell } from "../components/gameOfLife/cell.tsx";
import { SetNewCellConditions } from "../components/gameOfLife/cellCondition.tsx";

export const DIMENTIONS = 50;

export const GameOfLife = () => {
  const [state, setState] = useState({
    columns: [0],
    rows: [0],
    alive: [[false]],
    speed: 3,
  });
  useEffect(() => {
    const columns: Array<number> = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      columns.push(i);
    }

    const rows: Array<number> = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      rows.push(i);
    }

    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    setState({ ...state, columns: columns, rows: rows, alive: alive });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timerId = setTimeout(
      () => SetNewCellConditions({ state, setState }),
      2048 / Math.pow(2, state.speed)
    );
    return () => clearTimeout(timerId);
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

  return (
    <div className="flex-row mt-4">
      <div className="mr-4">
        {state.columns.map((column: number) => {
          return (
            <div key={column} className="flex-row">
              {state.rows.map((row: number) => {
                return (
                  <Cell
                    key={`${column}-${row}`}
                    alive={state.alive[column][row]}
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
            className="border border-slate-300 bg-gray-100 w-1/12"
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
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandleBlinker({ state, setState });
            }}
          >
            Blinker
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandlePulsar({ state, setState });
            }}
          >
            Pulsar
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandleGlider({ state, setState });
            }}
          >
            Glider
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandleTheRPentomino({ state, setState });
            }}
          >
            R-pentomino
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandleDieHard({ state, setState });
            }}
          >
            Die Hard
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandleAcorn({ state, setState });
            }}
          >
            Acorn
          </button>
        </div>
        <div>
          <button
            className="border border-slate-300 bg-gray-100 w-1/3 mt-4"
            onClick={() => {
              HandleRandom({ state, setState });
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};
