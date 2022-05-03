import React, { useState, useEffect } from "react";
import { DungeonTile, Tile } from "../components/dungeonTile";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { AStarFinder } from "astar-typescript";

export interface State {
  columns: number[];
  rows: number[];
  roads: Tile[][];
  dimentions: number;
  rooms: number;
  pathZone: number[][];
  showPath: boolean;
  distance: number;
}

const BOX_MAX_SIZE = 0;
let startPos = {
  x: 0,
  y: 0,
};
let endPos = {
  x: 0,
  y: 0,
};

export function Dungeon() {
  const [state, setState] = useState({
    columns: [],
    rows: [],
    roads: [],
    dimentions: 50,
    rooms: 25,
    showPath: false,
    distance: 0,
  } as State);

  const createNewDungeon = () => {
    const columns: Array<number> = [];
    const rows: Array<number> = [];
    for (let i = 0; i < state.dimentions; i++) {
      columns.push(i);
      rows.push(i);
    }

    const roads: Tile[][] = [];
    const pathZone: number[][] = [];
    for (let i = 0; i < state.dimentions; i++) {
      roads.push([Tile.Wall]);
      pathZone.push([1]);
      for (let j = 0; j < state.dimentions; j++) {
        roads[i][j] = Tile.Wall;
        pathZone[i][j] = 1;
      }
    }

    createRooms({ roads: roads, pathZone: pathZone });

    const aStarInstance = new AStarFinder({
      grid: { matrix: pathZone },
      diagonalAllowed: false,
      includeStartNode: false,
    });
    const myPathWay = aStarInstance.findPath(startPos, endPos);
    myPathWay.map((pathTile) => {
      roads[pathTile[1]][pathTile[0]] = Tile.AStarPath;
    });
    roads[startPos.y][startPos.x] = Tile.Start;
    roads[endPos.y][endPos.x] = Tile.End;

    setState({
      ...state,
      columns: columns,
      rows: rows,
      roads: roads,
      distance: myPathWay.length,
    });
  };

  useEffect(() => {
    createNewDungeon();
  }, [state.dimentions, state.rooms]);

  interface createRoomsProps {
    roads: Tile[][];
    pathZone: number[][];
  }

  const createRooms = (props: createRoomsProps) => {
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
          props.roads[y][x] = Tile.Road;
          props.pathZone[y][x] = 0;
        }
      }

      centerTo = { y: rndCenterY, x: rndCenterX };
      if (centerFrom.x > 0) {
        linkBoxes({
          roads: props.roads,
          pathZone: props.pathZone,
          centerFrom: { y: centerFrom.y, x: centerFrom.x },
          centerTo: { y: centerTo.y, x: centerTo.x },
        });
      }
      centerFrom = { y: rndCenterY, x: rndCenterX };

      if (i === 0) {
        startPos = { y: rndCenterY, x: rndCenterX };
      }
      if (i === state.rooms - 1) {
        endPos = { y: rndCenterY, x: rndCenterX };
      }
    }
  };

  interface linkBoxesProps {
    roads: Tile[][];
    pathZone: number[][];
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
      props.pathZone[currentPos.y][currentPos.x] = 0;
      directions.splice(rndNumber, 1);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col mr-4">
        <button
          className="border border-black h-10 w-60 mt-4 bg-mob-blue-dark text-white hover:bg-mob-blue-light rounded"
          onClick={() => {
            createNewDungeon();
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
        <button
          className={
            state.showPath
              ? "border border-black h-10 w-60 mt-4 bg-mob-blue-light text-white rounded"
              : "border border-black h-10 w-60 mt-4 bg-mob-blue-dark text-white rounded"
          }
          onClick={() => {
            setState({ ...state, showPath: !state.showPath });
          }}
        >
          {`Show Path [${state.distance} tiles]`}
        </button>
      </div>
      <div className="flex">
        <div>
          {state.columns.map((y) => {
            return (
              <div className="flex" key={y}>
                {state.columns.map((x) => {
                  return (
                    <div key={`${x}-${y}`}>
                      <DungeonTile
                        road={state.roads[y][x]}
                        showPath={state.showPath}
                      />
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
