import React from "react";

interface masterMindTileProps {
  number: number;
}

export function MastermindTile(props: masterMindTileProps) {
  return (
    <div>
      <div className="flex justify-center items-center mt-2 mr-4 text-5xl w-16 h-16 border border-black">
        {props.number}
      </div>
    </div>
  );
}
