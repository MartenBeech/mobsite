import React from "react";

interface props {
  road: boolean;
}

export function DungeonTile(props: props) {
  return (
    <div>
      {props.road ? (
        <div className="w-5 h-5 border border-black"></div>
      ) : (
        <div className="w-5 h-5 border border-black bg-gray"></div>
      )}
    </div>
  );
}
