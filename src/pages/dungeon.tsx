import React from "react";
import { DungeonTile } from "../components/dungeonTile";

export function Dungeon() {
  return (
    <div>
      <div>
        <DungeonTile road={false} />
      </div>
    </div>
  );
}
