import React, { useState, useEffect } from "react";
import { DungeonTile, Tile } from "../components/dungeonTile";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const BOX_MAX_SIZE = 3;

export interface State {
  columns: number[];
  rows: number[];
  roads: Tile[][];
  dimentions: number;
  rooms: number;
}

export function Dungeon() {
  const [state, setState] = useState({
    columns: [],
    rows: [],
    roads: [],
    dimentions: 50,
    rooms: 25,
  } as State);

  const newDungeon = () => {
    const columns: Array<number> = [];
    const rows: Array<number> = [];
    for (let i = 0; i < state.dimentions; i++) {
      columns.push(i);
      rows.push(i);
    }

    const roads: Tile[][] = [];
    for (let i = 0; i < state.dimentions; i++) {
      roads.push([Tile.Wall]);
      for (let j = 0; j < state.dimentions; j++) {
        roads[i][j] = Tile.Wall;
      }
    }

    createRooms(roads);

    setState({ ...state, columns: columns, rows: rows, roads: roads });
  };

  useEffect(() => {
    newDungeon();
  }, [state.dimentions, state.rooms]);

  const createRooms = (roads: Tile[][]) => {
    let centerFrom = { x: 0, y: 0 };
    let centerTo = { x: 0, y: 0 };

    for (let i = 0; i < state.rooms; i++) {
      const rndCenterX =
        Math.floor(Math.random() * (state.dimentions - BOX_MAX_SIZE * 2)) +
        BOX_MAX_SIZE;
      const rndCenterY =
        Math.floor(Math.random() * (state.dimentions - BOX_MAX_SIZE * 2)) +
        BOX_MAX_SIZE;

      const rndLeft = Math.floor(Math.random() * BOX_MAX_SIZE);
      const rndRight = Math.floor(Math.random() * BOX_MAX_SIZE);
      const rndUp = Math.floor(Math.random() * BOX_MAX_SIZE);
      const rndDown = Math.floor(Math.random() * BOX_MAX_SIZE);

      for (let x = rndCenterX - rndLeft; x <= rndCenterX + rndRight; x++) {
        for (let y = rndCenterY - rndUp; y <= rndCenterY + rndDown; y++) {
          roads[y][x] = Tile.Road;
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

      if (i === 0) {
        roads[rndCenterY][rndCenterX] = Tile.Start;
      }
      if (i === state.rooms - 1) {
        roads[rndCenterY][rndCenterX] = Tile.End;
      }
    }
  };

  interface linkBoxesProps {
    roads: Tile[][];
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
      props.roads[currentPos.y][currentPos.x] = Tile.Road;
      directions.splice(rndNumber, 1);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col mr-4">
        <button
          className="border border-black h-10 w-60 mt-4 bg-mob-blue-dark text-white hover:bg-mob-blue-light rounded"
          onClick={() => {
            newDungeon();
          }}
        >
          New Dungeon
        </button>
        <div className="flex mt-4">
          <BsFillArrowLeftSquareFill
            className="text-mob-blue-dark hover:text-mob-blue-light"
            size={40}
            onClick={() => {
              setState({
                ...state,
                dimentions:
                  state.dimentions > 10
                    ? state.dimentions - 5
                    : state.dimentions,
              });
            }}
          />
          <div className="flex justify-center items-center border border-black h-10 w-36 ml-2 mr-2 bg-mob-blue-dark text-white rounded">
            {`${state.dimentions} Dimentions`}
          </div>
          <BsFillArrowRightSquareFill
            className="text-mob-blue-dark hover:text-mob-blue-light"
            size={40}
            onClick={() => {
              setState({
                ...state,
                dimentions:
                  state.dimentions < 100
                    ? state.dimentions + 5
                    : state.dimentions,
              });
            }}
          />
        </div>
        <div className="flex mt-4">
          <BsFillArrowLeftSquareFill
            className="text-mob-blue-dark hover:text-mob-blue-light"
            size={40}
            onClick={() => {
              setState({
                ...state,
                rooms:
                  state.rooms > 5
                    ? state.rooms - 5
                    : state.rooms > 2
                    ? 2
                    : state.rooms,
              });
            }}
          />
          <div className="flex justify-center items-center border border-black h-10 w-36 ml-2 mr-2 bg-mob-blue-dark text-white rounded">
            {`${state.rooms} Rooms`}
          </div>
          <BsFillArrowRightSquareFill
            className="text-mob-blue-dark hover:text-mob-blue-light"
            size={40}
            onClick={() => {
              setState({
                ...state,
                rooms:
                  state.rooms === 2
                    ? 5
                    : state.rooms < 50
                    ? state.rooms + 5
                    : state.rooms,
              });
            }}
          />
        </div>
      </div>
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
      </div>
    </div>
  );
}
