import React from "react";

export enum Tile {
  Wall,
  Road,
  Start,
  End,
}

interface props {
  road: Tile;
}

export function DungeonTile(props: props) {
  return (
    <div>
      {props.road === Tile.Road ? (
        <div className="w-4 h-4 border border-black bg-gray-100"></div>
      ) : props.road === Tile.Wall ? (
        <div className="w-4 h-4 border border-gray-100 bg-black"></div>
      ) : props.road === Tile.Start ? (
        <div className="w-4 h-4 border border-black bg-green-500"></div>
      ) : (
        props.road === Tile.End && (
          <div className="w-4 h-4 border border-black bg-red-500"></div>
        )
      )}
    </div>
  );
}
