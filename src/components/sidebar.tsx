import React, { useState, useEffect } from "react";
import { Home } from "../pages/home";
import { Incrementer } from "../pages/incrementer";
import { CurrentTime } from "../pages/currentTime";
import { StarGame } from "../pages/starGame";
import { IngredientTable } from "../pages/ingredientTable";
import { RandomUsers } from "../pages/randomUsers";
import { GameOfLife } from "../pages/gameOfLife";
import { Dungeon } from "../pages/dungeon";
import { Mastermind } from "../pages/mastermind";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

interface sidebarProps {
  loginName: string;
}

export const Sidebar = (props: sidebarProps) => {
  const [state, setState] = useState({ currentLink: "" });

  useEffect(() => {
    setState({ currentLink: "" });
  }, []);

  return (
    <div className="flex h-full">
      <Router>
        <div className="flex">
          <div className="flex mr-4 shadow-lg">
            <div className="box-border bg-gray-400 w-48">
              <div className="m-4">
                <div className="flex justify-center mb-8">
                  <FaUserAlt size={30} />
                  <div className="ml-2 text-xl">{`${props.loginName}`}</div>
                </div>
                <Button
                  state={state}
                  setState={setState}
                  text="Home"
                  link={"/"}
                />
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
                <Button
                  state={state}
                  setState={setState}
                  text="Dungeon"
                  link={"/dungeon"}
                />
                <Button
                  state={state}
                  setState={setState}
                  text="Mastermind"
                  link={"/mastermind"}
                />
              </div>
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
          <Route path="/dungeon" element={<Dungeon />}></Route>
          <Route path="/mastermind" element={<Mastermind />}></Route>
        </Routes>
      </Router>
    </div>
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
  return (
    <Link to={`${props.link}`}>
      <div className="flex flex-column mt-4">
        <button
          className={
            props.link != useLocation().pathname
              ? "border border-black rounded h-10 w-full text-white bg-mob-blue-dark hover:bg-mob-blue-light"
              : "border border-black rounded h-10 w-full text-white bg-mob-blue-dark cursor-default opacity-50"
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
