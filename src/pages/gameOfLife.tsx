import react, { useState, useEffect } from "react";
import "../global.css";
import {
  handleBlinker,
  handleAcorn,
  handleDieHard,
  handlePulsar,
  handleTheRPentomino,
  handleRandom,
  // @ts-ignore
} from "../components/gameOfLife/pattern.tsx";
// @ts-ignore
import { Cell } from "../components/gameOfLife/cell.tsx";

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
    const timerId = setTimeout(setNewCellConditions, 200);
    return () => clearTimeout(timerId);
  });

  const copyOf2dArray = (data: Array<any>[]) => {
    let alive: boolean[][] = [];
    state.columns.map((column: number) => {
      alive.push([]);
      state.rows.map((row: number) => {
        alive[column][row] = data[column][row];
      });
    });
    return alive;
  };

  const setNewCellConditions = () => {
    let alive: boolean[][] = copyOf2dArray(state.alive);

    for (let i = 0; i < state.columns.length; i++) {
      for (let j = 0; j < state.rows.length; j++) {
        let neighbours = 0;
        if (isCellAlive(i - 1, j - 1)) {
          neighbours++;
        }
        if (isCellAlive(i - 1, j)) {
          neighbours++;
        }
        if (isCellAlive(i - 1, j + 1)) {
          neighbours++;
        }
        if (isCellAlive(i, j - 1)) {
          neighbours++;
        }
        if (isCellAlive(i, j + 1)) {
          neighbours++;
        }
        if (isCellAlive(i + 1, j - 1)) {
          neighbours++;
        }
        if (isCellAlive(i + 1, j)) {
          neighbours++;
        }
        if (isCellAlive(i + 1, j + 1)) {
          neighbours++;
        }

        if (state.alive[i][j]) {
          if (neighbours < 2 || neighbours > 3) {
            alive[i][j] = false;
          }
        } else if (!state.alive[i][j]) {
          if (neighbours === 3) {
            alive[i][j] = true;
          }
        }
      }
    }
    setState({
      ...state,
      alive: alive,
    });
  };

  const isCellAlive = (column: number, row: number) => {
    if (
      row < 0 ||
      column < 0 ||
      column >= state.columns.length ||
      row >= state.rows.length
    ) {
      return false;
    }
    if (state.alive[column][row]) {
      return true;
    }
    return false;
  };

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
              handleBlinker({ state, setState });
            }}
          >
            Blinker
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handlePulsar({ state, setState });
            }}
          >
            Pulsar
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleTheRPentomino({ state, setState });
            }}
          >
            R-pentomino
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleDieHard({ state, setState });
            }}
          >
            Die Hard
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleAcorn({ state, setState });
            }}
          >
            Acorn
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleRandom({ state, setState });
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};
