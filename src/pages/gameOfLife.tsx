// @ts-nocheck
import { useState, useEffect } from "react";
import "../global.css";
import {
  HandleBlinker,
  HandleAcorn,
  HandleDieHard,
  HandlePulsar,
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

    setState({ columns: columns, rows: rows, alive: alive });
  }, []);

  useEffect(() => {
    const timerId = setTimeout(
      () => SetNewCellConditions({ state, setState }),
      200
    );
    return () => clearTimeout(timerId);
  });

  return (
    <div className="flex-row">
      <div>
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
      <div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              HandleBlinker({ state, setState });
            }}
          >
            Blinker
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              HandlePulsar({ state, setState });
            }}
          >
            Pulsar
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              HandleTheRPentomino({ state, setState });
            }}
          >
            R-pentomino
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              HandleDieHard({ state, setState });
            }}
          >
            Die Hard
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              HandleAcorn({ state, setState });
            }}
          >
            Acorn
          </button>
        </div>
        <div>
          <button
            className="cell-button"
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
