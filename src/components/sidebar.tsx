import React, { useState, useEffect } from "react";
import { Home } from "../pages/home";
import { Incrementer } from "../pages/incrementer";
import { CurrentTime } from "../pages/currentTime";
import { StarGame } from "../pages/starGame";
import { IngredientTable } from "../pages/ingredientTable";
import { RandomUsers } from "../pages/randomUsers";
import { GameOfLife } from "../pages/gameOfLife";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Sidebar = () => {
  const [state, setState] = useState({ currentLink: "" });

  useEffect(() => {
    setState({ currentLink: "" });
  }, []);

  return (
    <Router>
      <div>
        <div className="flex flex-row mr-4 shadow-lg">
          <div className="box-border bg-blue-400 w-40 h-screen">
            <Button state={state} setState={setState} text="Home" link={"/"} />
            <Button
              state={state}
              setState={setState}
              text="Incrementer"
              link={"/incrementer"}
            />
            <Button
              state={state}
              setState={setState}
              text="Current Time"
              link={"/current-time"}
            />
            <Button
              state={state}
              setState={setState}
              text="Ingredient Table"
              link={"/ingredient-table"}
            />
            <Button
              state={state}
              setState={setState}
              text="Star Game"
              link={"/star-game"}
            />
            <Button
              state={state}
              setState={setState}
              text="Game of Life"
              link={"/game-of-life"}
            />
            <Button
              state={state}
              setState={setState}
              text="Random User Table"
              link={"/random-user-table"}
            />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
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

interface buttonProps {
  state: {
    currentLink: string;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      currentLink: string;
    }>
  >;
  text: string;
  link: string;
}

const Button = (props: buttonProps) => {
  const classNameCurrentLink = "border border-black rounded bg-gray-500 h-10";
  const classNameNotCurrentLink =
    "border border-black rounded bg-gray-300 h-10";

  return (
    <Link to={`${props.link}`}>
      <div className="flex flex-column ml-2 mr-2 mt-4">
        <button
          className={
            props.link === props.state.currentLink
              ? classNameCurrentLink
              : classNameNotCurrentLink
          }
          onClick={() => {
            props.setState({ currentLink: props.link });
          }}
        >
          {props.text}
        </button>
      </div>
    </Link>
  );
};
