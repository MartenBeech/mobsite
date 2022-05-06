import React from "react";

export enum Tile {
  Wall,
  Road,
  Start,
  End,
  AStarPath,
}

interface props {
  road: Tile;
  showPath: boolean;
  dimentions: number;
}

export function DungeonTile(props: props) {
  let road = props.road;
  if (!props.showPath && props.road === Tile.AStarPath) {
    road = Tile.Road;
  }

  return (
    <div>
      {props.dimentions > 75 ? (
        road === Tile.Road ? (
          <div className={`w-3 h-3 border border-black bg-gray-100`}></div>
        ) : road === Tile.Wall ? (
          <div className={`w-3 h-3 border border-black bg-black`}></div>
        ) : road === Tile.Start ? (
          <div className={`w-3 h-3 border border-black bg-green-500`}></div>
        ) : road === Tile.End ? (
          <div className={`w-3 h-3 border border-black bg-red-500`}></div>
        ) : road === Tile.AStarPath ? (
          <div className={`w-3 h-3 border border-black bg-blue-300`}></div>
        ) : null
      ) : props.dimentions > 50 ? (
        road === Tile.Road ? (
          <div className={`w-4 h-4 border border-black bg-gray-100`}></div>
        ) : road === Tile.Wall ? (
          <div className={`w-4 h-4 border border-black bg-black`}></div>
        ) : road === Tile.Start ? (
          <div className={`w-4 h-4 border border-black bg-green-500`}></div>
        ) : road === Tile.End ? (
          <div className={`w-4 h-4 border border-black bg-red-500`}></div>
        ) : road === Tile.AStarPath ? (
          <div className={`w-4 h-4 border border-black bg-blue-300`}></div>
        ) : null
      ) : props.dimentions > 25 ? (
        road === Tile.Road ? (
          <div className={`w-6 h-6 border border-black bg-gray-100`}></div>
        ) : road === Tile.Wall ? (
          <div className={`w-6 h-6 border border-black bg-black`}></div>
        ) : road === Tile.Start ? (
          <div className={`w-6 h-6 border border-black bg-green-500`}></div>
        ) : road === Tile.End ? (
          <div className={`w-6 h-6 border border-black bg-red-500`}></div>
        ) : road === Tile.AStarPath ? (
          <div className={`w-6 h-6 border border-black bg-blue-300`}></div>
        ) : null
      ) : props.dimentions >= 10 ? (
        road === Tile.Road ? (
          <div className={`w-12 h-12 border border-black bg-gray-100`}></div>
        ) : road === Tile.Wall ? (
          <div className={`w-12 h-12 border border-black bg-black`}></div>
        ) : road === Tile.Start ? (
          <div className={`w-12 h-12 border border-black bg-green-500`}></div>
        ) : road === Tile.End ? (
          <div className={`w-12 h-12 border border-black bg-red-500`}></div>
        ) : road === Tile.AStarPath ? (
          <div className={`w-12 h-12 border border-black bg-blue-300`}></div>
        ) : null
      ) : null}
    </div>
  );
}
