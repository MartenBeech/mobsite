import React from "react";
import { preProcessFile } from "typescript";

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
}

export function DungeonTile(props: props) {
  let road = props.road;
  if (!props.showPath && props.road === Tile.AStarPath) {
    road = Tile.Road;
  }
  return (
    <div>
      {road === Tile.Road ? (
        <div className="w-4 h-4 border border-black bg-gray-100"></div>
      ) : road === Tile.Wall ? (
        <div className="w-4 h-4 border border-black bg-black"></div>
      ) : road === Tile.Start ? (
        <div className="w-4 h-4 border border-black bg-green-500"></div>
      ) : road === Tile.End ? (
        <div className="w-4 h-4 border border-black bg-red-500"></div>
      ) : road === Tile.AStarPath ? (
        <div className="w-4 h-4 border border-black bg-blue-200"></div>
      ) : null}
    </div>
  );
}
