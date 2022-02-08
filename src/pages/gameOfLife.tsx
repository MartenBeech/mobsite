import react, { useState, useEffect } from "react";
import "../global.css";

const DIMENTIONS = 50;

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

  const renderCell = (alive: boolean) => {
    return (
      <div>
        {alive ? (
          <div className="cell-alive"></div>
        ) : (
          <div className="cell-dead"></div>
        )}
      </div>
    );
  };

  const handleBlinker = () => {
    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    const c = DIMENTIONS / 2 - 1;

    alive[c - 5][c - 4] = true;
    alive[c - 5][c - 5] = true;
    alive[c - 5][c - 6] = true;

    alive[c - 5][c + 4] = true;
    alive[c - 5][c + 5] = true;
    alive[c - 5][c + 6] = true;

    alive[c + 5][c - 4] = true;
    alive[c + 5][c - 5] = true;
    alive[c + 5][c - 6] = true;

    alive[c + 5][c + 4] = true;
    alive[c + 5][c + 5] = true;
    alive[c + 5][c + 6] = true;

    setState({ ...state, alive: alive });
  };

  const handlePulsar = () => {
    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    const c = DIMENTIONS / 2 - 1;

    alive[c - 1][c - 2] = true;
    alive[c - 1][c - 3] = true;
    alive[c - 1][c - 4] = true;
    alive[c - 2][c - 1] = true;
    alive[c - 3][c - 1] = true;
    alive[c - 4][c - 1] = true;
    alive[c - 6][c - 2] = true;
    alive[c - 6][c - 3] = true;
    alive[c - 6][c - 4] = true;
    alive[c - 2][c - 6] = true;
    alive[c - 3][c - 6] = true;
    alive[c - 4][c - 6] = true;

    alive[c - 1][c + 2] = true;
    alive[c - 1][c + 3] = true;
    alive[c - 1][c + 4] = true;
    alive[c - 2][c + 1] = true;
    alive[c - 3][c + 1] = true;
    alive[c - 4][c + 1] = true;
    alive[c - 6][c + 2] = true;
    alive[c - 6][c + 3] = true;
    alive[c - 6][c + 4] = true;
    alive[c - 2][c + 6] = true;
    alive[c - 3][c + 6] = true;
    alive[c - 4][c + 6] = true;

    alive[c + 1][c - 2] = true;
    alive[c + 1][c - 3] = true;
    alive[c + 1][c - 4] = true;
    alive[c + 2][c - 1] = true;
    alive[c + 3][c - 1] = true;
    alive[c + 4][c - 1] = true;
    alive[c + 6][c - 2] = true;
    alive[c + 6][c - 3] = true;
    alive[c + 6][c - 4] = true;
    alive[c + 2][c - 6] = true;
    alive[c + 3][c - 6] = true;
    alive[c + 4][c - 6] = true;

    alive[c + 1][c + 2] = true;
    alive[c + 1][c + 3] = true;
    alive[c + 1][c + 4] = true;
    alive[c + 2][c + 1] = true;
    alive[c + 3][c + 1] = true;
    alive[c + 4][c + 1] = true;
    alive[c + 6][c + 2] = true;
    alive[c + 6][c + 3] = true;
    alive[c + 6][c + 4] = true;
    alive[c + 2][c + 6] = true;
    alive[c + 3][c + 6] = true;
    alive[c + 4][c + 6] = true;

    setState({ ...state, alive: alive });
  };

  const handleTheRPentomino = () => {
    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    const c = DIMENTIONS / 2 - 1;

    alive[c][c] = true;
    alive[c - 1][c] = true;
    alive[c + 1][c] = true;
    alive[c][c - 1] = true;
    alive[c - 1][c + 1] = true;

    setState({ ...state, alive: alive });
  };

  const handleDieHard = () => {
    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    const c = DIMENTIONS / 2 - 1;

    alive[c][c - 2] = true;
    alive[c][c - 3] = true;
    alive[c + 1][c - 2] = true;
    alive[c + 1][c + 2] = true;
    alive[c + 1][c + 3] = true;
    alive[c + 1][c + 4] = true;
    alive[c - 1][c + 3] = true;

    setState({ ...state, alive: alive });
  };

  const handleAcorn = () => {
    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = false;
      }
    }

    const c = DIMENTIONS / 2 - 1;

    alive[c][c] = true;
    alive[c - 1][c - 2] = true;
    alive[c + 1][c + 1] = true;
    alive[c + 1][c + 2] = true;
    alive[c + 1][c + 3] = true;
    alive[c + 1][c - 2] = true;
    alive[c + 1][c - 3] = true;

    setState({ ...state, alive: alive });
  };

  const handleRandom = () => {
    let alive: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      alive.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        alive[i][j] = Math.random() < 0.5 ? true : false;
      }
    }

    setState({ ...state, alive: alive });
  };

  return (
    <div className="flex-row">
      <div>
        {state.columns.map((column: number) => {
          return (
            <div className="flex-row">
              {state.rows.map((row: number) => {
                return renderCell(state.alive[column][row]);
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
              handleBlinker();
            }}
          >
            Blinker
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handlePulsar();
            }}
          >
            Pulsar
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleTheRPentomino();
            }}
          >
            R-pentomino
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleDieHard();
            }}
          >
            Die Hard
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleAcorn();
            }}
          >
            Acorn
          </button>
        </div>
        <div>
          <button
            className="cell-button"
            onClick={() => {
              handleRandom();
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};
