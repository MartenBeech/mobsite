import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./pages/home.tsx";
import { Incrementer } from "./pages/incrementer.tsx";
import { Sidebar } from "./components/sidebar.tsx";
import { CurrentTime } from "./pages/currentTime.tsx";
import { StarGame } from "./pages/starGame.tsx";
import { IngredientTable } from "./pages/ingredientTable.tsx";
import { RandomUsers } from "./pages/randomUsers.tsx";
import { GameOfLife } from "./pages/gameOfLife.tsx";
import { Routing } from "./router.tsx";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex">
      <Sidebar />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
