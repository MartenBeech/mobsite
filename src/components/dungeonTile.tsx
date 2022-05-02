import React from "react";

interface props {
  road: boolean;
}

export function DungeonTile(props: props) {
  return (
    <div>
      {props.road ? (
        <div className="w-4 h-4 border border-black bg-gray-100"></div>
      ) : (
        <div className="w-4 h-4 border border-gray-100 bg-black"></div>
      )}
    </div>
  );
}
