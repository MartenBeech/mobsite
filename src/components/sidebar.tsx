// @ts-nocheck
import { Home } from "../pages/home.tsx";
import { Incrementer } from "../pages/incrementer.tsx";
import { CurrentTime } from "../pages/currentTime.tsx";
import { StarGame } from "../pages/starGame.tsx";
import { IngredientTable } from "../pages/ingredientTable.tsx";
import { RandomUsers } from "../pages/randomUsers.tsx";
import { GameOfLife } from "../pages/gameOfLife.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Router>
      <div>
        <div className="flex flex-row">
          <div className="box-border bg-blue-400 w-40 h-screen">
            <Button text="Home" />
            <Button text="Incrementer" />
            <Button text="Current Time" />
            <Button text="Ingredient Table" />
            <Button text="Star Game" />
            <Button text="Game of Life" />
            <Button text="Random User Table" />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/incrementer" element={<Incrementer />}></Route>
        <Route path="/current-time" element={<CurrentTime />}></Route>
        <Route path="/ingredient-table" element={<IngredientTable />}></Route>
        <Route path="/star-game" element={<StarGame />}></Route>
        <Route path="/game-of-life" element={<GameOfLife />}></Route>
        <Route path="/random-user-table" element={<RandomUsers />}></Route>
      </Routes>
    </Router>
  );
};

const Button = ({ text }) => {
  const textWords: string[] = text.toLowerCase().split(" ");
  let linkText = "";
  textWords.map((word, index) => {
    if (index != 0) {
      linkText += "-";
    }
    linkText += word;
  });
  return (
    <Link to={`${linkText}`}>
      <div className="flex flex-column ml-2 mr-2 mt-2">
        <button className="border border-black rounded bg-gray-300 h-10">
          {text}
        </button>
      </div>
    </Link>
  );
};
