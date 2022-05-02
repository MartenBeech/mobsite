import React, { useState, useEffect } from "react";
import { DungeonTile } from "../components/dungeonTile";

const DIMENTIONS = 50;
const N_BOXES = 25;
const BOX_MAX_SIZE = Math.floor(DIMENTIONS / 20);

export interface State {
  columns: number[];
  rows: number[];
  roads: boolean[][];
}

export function Dungeon() {
  const [state, setState] = useState({
    columns: [],
    rows: [],
    roads: [],
  } as State);

  useEffect(() => {
    const columns: Array<number> = [];
    const rows: Array<number> = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      columns.push(i);
      rows.push(i);
    }

    const roads: boolean[][] = [];
    for (let i = 0; i < DIMENTIONS; i++) {
      roads.push([false]);
      for (let j = 0; j < DIMENTIONS; j++) {
        roads[i][j] = false;
      }
    }

    createBoxes(roads);

    setState({ ...state, columns: columns, rows: rows, roads: roads });
  }, []);

  const createBoxes = (roads: boolean[][]) => {
    let centerFrom = { x: 0, y: 0 };
    let centerTo = { x: 0, y: 0 };

    for (let i = 0; i < N_BOXES; i++) {
      const rndCenterX =
        Math.floor(Math.random() * (DIMENTIONS - BOX_MAX_SIZE * 2)) +
        BOX_MAX_SIZE;
      const rndCenterY =
        Math.floor(Math.random() * (DIMENTIONS - BOX_MAX_SIZE * 2)) +
        BOX_MAX_SIZE;

      const rndLeft = Math.floor(Math.random() * BOX_MAX_SIZE);
      const rndRight = Math.floor(Math.random() * BOX_MAX_SIZE);
      const rndUp = Math.floor(Math.random() * BOX_MAX_SIZE);
      const rndDown = Math.floor(Math.random() * BOX_MAX_SIZE);

      for (let x = rndCenterX - rndLeft; x <= rndCenterX + rndRight; x++) {
        for (let y = rndCenterY - rndUp; y <= rndCenterY + rndDown; y++) {
          roads[y][x] = true;
        }
      }

      centerTo = { y: rndCenterY, x: rndCenterX };
      if (centerFrom.x > 0) {
        linkBoxes({
          roads: roads,
          centerFrom: { y: centerFrom.y, x: centerFrom.x },
          centerTo: { y: centerTo.y, x: centerTo.x },
        });
      }
      centerFrom = { y: rndCenterY, x: rndCenterX };
    }
  };

  interface linkBoxesProps {
    roads: boolean[][];
    centerFrom: { y: number; x: number };
    centerTo: { y: number; x: number };
  }

  const linkBoxes = (props: linkBoxesProps) => {
    const directions: string[] = [];
    const diffX = props.centerTo.x - props.centerFrom.x;
    const diffY = props.centerTo.y - props.centerFrom.y;

    if (diffX > 0) {
      for (let i = 0; i < diffX; i++) {
        directions.push("right");
      }
    }
    if (diffX < 0) {
      for (let i = 0; i < -diffX; i++) {
        directions.push("left");
      }
    }
    if (diffY > 0) {
      for (let i = 0; i < diffY; i++) {
        directions.push("down");
      }
    }
    if (diffY < 0) {
      for (let i = 0; i < -diffY; i++) {
        directions.push("up");
      }
    }

    const currentPos = { y: props.centerFrom.y, x: props.centerFrom.x };
    while (directions.length > 0) {
      const rndNumber = Math.floor(Math.random() * directions.length);
      const rndDir = directions[rndNumber];
      rndDir === "right"
        ? (currentPos.x += 1)
        : rndDir === "left"
        ? (currentPos.x -= 1)
        : rndDir === "down"
        ? (currentPos.y += 1)
        : rndDir === "up"
        ? (currentPos.y -= 1)
        : null;
      props.roads[currentPos.y][currentPos.x] = true;
      directions.splice(rndNumber, 1);
    }
  };

  return (
    <div>
      <div className="flex">
        <div>
          {state.columns.map((y) => {
            return (
              <div className="flex" key={y}>
                {state.columns.map((x) => {
                  return (
                    <div key={`${x}-${y}`}>
                      <DungeonTile road={state.roads[y][x]} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <button
          className="border border-black h-10 w-40 mt-4 ml-4 bg-button-bg text-white hover:bg-button-hover"
          onClick={() => {
            const roads: boolean[][] = [];
            for (let i = 0; i < DIMENTIONS; i++) {
              roads.push([false]);
              for (let j = 0; j < DIMENTIONS; j++) {
                roads[i][j] = false;
              }
            }

            createBoxes(roads);

            setState({ ...state, roads: roads });
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
