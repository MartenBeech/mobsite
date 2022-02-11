// @ts-nocheck
import { DIMENTIONS } from "../../pages/gameOfLife.tsx";

interface props {
  state: any;
  setState: any;
}

export const HandleBlinker = (props: props) => {
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

export const HandlePulsar = (props: props) => {
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

export const HandleGlider = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  alive[1][2] = true;
  alive[2][3] = true;
  alive[3][1] = true;
  alive[3][2] = true;
  alive[3][3] = true;

  props.setState({ ...props.state, alive: alive });
};

export const HandleTheRPentomino = (props: props) => {
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

export const HandleDieHard = (props: props) => {
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

export const HandleAcorn = (props: props) => {
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

export const HandleRandom = (props: props) => {
  let alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = Math.random() < 0.5 ? true : false;
    }
  }

  props.setState({ ...props.state, alive: alive });
};
