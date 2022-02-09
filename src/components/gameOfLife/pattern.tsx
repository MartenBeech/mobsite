import react, { useState, useEffect } from "react";
import "../../global.css";
// @ts-ignore
import { DIMENTIONS } from "../../pages/gameOfLife.tsx";

interface props {
  state: any;
  setState: any;
}

export const handleBlinker = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c - 5][c - 4] = true;
  alive[c - 5][c - 5] = true;
  alive[c - 5][c - 6] = true;

  alive[c - 5][c + 4] = true;
  alive[c - 5][c + 5] = true;
  alive[c - 5][c + 6] = true;

  alive[c + 5][c - 4] = true;
  alive[c + 5][c - 5] = true;
  alive[c + 5][c - 6] = true;

  alive[c + 5][c + 4] = true;
  alive[c + 5][c + 5] = true;
  alive[c + 5][c + 6] = true;

  props.setState({ ...props.state, alive: alive });
};

export const handlePulsar = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c - 1][c - 2] = true;
  alive[c - 1][c - 3] = true;
  alive[c - 1][c - 4] = true;
  alive[c - 2][c - 1] = true;
  alive[c - 3][c - 1] = true;
  alive[c - 4][c - 1] = true;
  alive[c - 6][c - 2] = true;
  alive[c - 6][c - 3] = true;
  alive[c - 6][c - 4] = true;
  alive[c - 2][c - 6] = true;
  alive[c - 3][c - 6] = true;
  alive[c - 4][c - 6] = true;

  alive[c - 1][c + 2] = true;
  alive[c - 1][c + 3] = true;
  alive[c - 1][c + 4] = true;
  alive[c - 2][c + 1] = true;
  alive[c - 3][c + 1] = true;
  alive[c - 4][c + 1] = true;
  alive[c - 6][c + 2] = true;
  alive[c - 6][c + 3] = true;
  alive[c - 6][c + 4] = true;
  alive[c - 2][c + 6] = true;
  alive[c - 3][c + 6] = true;
  alive[c - 4][c + 6] = true;

  alive[c + 1][c - 2] = true;
  alive[c + 1][c - 3] = true;
  alive[c + 1][c - 4] = true;
  alive[c + 2][c - 1] = true;
  alive[c + 3][c - 1] = true;
  alive[c + 4][c - 1] = true;
  alive[c + 6][c - 2] = true;
  alive[c + 6][c - 3] = true;
  alive[c + 6][c - 4] = true;
  alive[c + 2][c - 6] = true;
  alive[c + 3][c - 6] = true;
  alive[c + 4][c - 6] = true;

  alive[c + 1][c + 2] = true;
  alive[c + 1][c + 3] = true;
  alive[c + 1][c + 4] = true;
  alive[c + 2][c + 1] = true;
  alive[c + 3][c + 1] = true;
  alive[c + 4][c + 1] = true;
  alive[c + 6][c + 2] = true;
  alive[c + 6][c + 3] = true;
  alive[c + 6][c + 4] = true;
  alive[c + 2][c + 6] = true;
  alive[c + 3][c + 6] = true;
  alive[c + 4][c + 6] = true;

  props.setState({ ...props.state, alive: alive });
};

export const handleTheRPentomino = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c][c] = true;
  alive[c - 1][c] = true;
  alive[c + 1][c] = true;
  alive[c][c - 1] = true;
  alive[c - 1][c + 1] = true;

  props.setState({ ...props.state, alive: alive });
};

export const handleDieHard = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c][c - 2] = true;
  alive[c][c - 3] = true;
  alive[c + 1][c - 2] = true;
  alive[c + 1][c + 2] = true;
  alive[c + 1][c + 3] = true;
  alive[c + 1][c + 4] = true;
  alive[c - 1][c + 3] = true;

  props.setState({ ...props.state, alive: alive });
};

export const handleAcorn = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c][c] = true;
  alive[c - 1][c - 2] = true;
  alive[c + 1][c + 1] = true;
  alive[c + 1][c + 2] = true;
  alive[c + 1][c + 3] = true;
  alive[c + 1][c - 2] = true;
  alive[c + 1][c - 3] = true;

  props.setState({ ...props.state, alive: alive });
};

export const handleRandom = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = Math.random() < 0.5 ? true : false;
    }
  }

  props.setState({ ...props.state, alive: alive });
};
