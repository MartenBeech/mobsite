import { DIMENTIONS } from "../../pages/gameOfLife";

export const GetClear = () => {
  const alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  return alive;
};

export const GetBlinker = () => {
  const alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c][c - 4] = true;
  alive[c][c - 5] = true;
  alive[c][c - 6] = true;

  alive[c][c + 4] = true;
  alive[c][c + 5] = true;
  alive[c][c + 6] = true;

  alive[c - 4][c] = true;
  alive[c - 5][c] = true;
  alive[c - 6][c] = true;

  alive[c + 4][c] = true;
  alive[c + 5][c] = true;
  alive[c + 6][c] = true;

  return alive;
};

export const GetPulsar = () => {
  const alive: boolean[][] = [];
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

  return alive;
};

export const GetGlider = () => {
  const alive: boolean[][] = [];
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

  return alive;
};

export const GetTheRPentomino = () => {
  const alive: boolean[][] = [];
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

  return alive;
};

export const GetDieHard = () => {
  const alive: boolean[][] = [];
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

  return alive;
};

export const GetAcorn = () => {
  const alive: boolean[][] = [];
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

  return alive;
};

export const GetSpaceship = () => {
  const alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = false;
    }
  }

  const c = DIMENTIONS / 2 - 1;

  alive[c - 9][c + 2] = true;
  alive[c - 10][c + 1] = true;
  alive[c - 10][c + 3] = true;
  alive[c - 11][c + 1] = true;
  alive[c - 12][c + 2] = true;
  alive[c - 12][c + 3] = true;
  alive[c - 12][c + 5] = true;
  alive[c - 13][c + 5] = true;
  alive[c - 17][c + 6] = true;
  alive[c - 17][c + 7] = true;
  alive[c - 18][c + 6] = true;
  alive[c - 18][c + 7] = true;
  alive[c - 11][c + 12] = true;
  alive[c - 11][c + 13] = true;
  alive[c - 12][c + 11] = true;
  alive[c - 12][c + 14] = true;
  alive[c - 13][c + 11] = true;
  alive[c - 13][c + 13] = true;
  alive[c - 14][c + 12] = true;
  alive[c - 2][c + 9] = true;
  alive[c - 1][c + 10] = true;
  alive[c - 3][c + 10] = true;
  alive[c - 1][c + 11] = true;
  alive[c - 2][c + 12] = true;
  alive[c - 3][c + 12] = true;
  alive[c - 5][c + 12] = true;
  alive[c - 5][c + 13] = true;
  alive[c - 6][c + 17] = true;
  alive[c - 7][c + 17] = true;
  alive[c - 6][c + 18] = true;
  alive[c - 7][c + 18] = true;

  alive[c + 9][c + 2] = true;
  alive[c + 10][c + 1] = true;
  alive[c + 10][c + 3] = true;
  alive[c + 11][c + 1] = true;
  alive[c + 12][c + 2] = true;
  alive[c + 12][c + 3] = true;
  alive[c + 12][c + 5] = true;
  alive[c + 13][c + 5] = true;
  alive[c + 17][c + 6] = true;
  alive[c + 17][c + 7] = true;
  alive[c + 18][c + 6] = true;
  alive[c + 18][c + 7] = true;
  alive[c + 11][c + 12] = true;
  alive[c + 11][c + 13] = true;
  alive[c + 12][c + 11] = true;
  alive[c + 12][c + 14] = true;
  alive[c + 13][c + 11] = true;
  alive[c + 13][c + 13] = true;
  alive[c + 14][c + 12] = true;
  alive[c + 2][c + 9] = true;
  alive[c + 1][c + 10] = true;
  alive[c + 3][c + 10] = true;
  alive[c + 1][c + 11] = true;
  alive[c + 2][c + 12] = true;
  alive[c + 3][c + 12] = true;
  alive[c + 5][c + 12] = true;
  alive[c + 5][c + 13] = true;
  alive[c + 6][c + 17] = true;
  alive[c + 7][c + 17] = true;
  alive[c + 6][c + 18] = true;
  alive[c + 7][c + 18] = true;

  alive[c + 9][c - 2] = true;
  alive[c + 10][c - 1] = true;
  alive[c + 10][c - 3] = true;
  alive[c + 11][c - 1] = true;
  alive[c + 12][c - 2] = true;
  alive[c + 12][c - 3] = true;
  alive[c + 12][c - 5] = true;
  alive[c + 13][c - 5] = true;
  alive[c + 17][c - 6] = true;
  alive[c + 17][c - 7] = true;
  alive[c + 18][c - 6] = true;
  alive[c + 18][c - 7] = true;
  alive[c + 11][c - 12] = true;
  alive[c + 11][c - 13] = true;
  alive[c + 12][c - 11] = true;
  alive[c + 12][c - 14] = true;
  alive[c + 13][c - 11] = true;
  alive[c + 13][c - 13] = true;
  alive[c + 14][c - 12] = true;
  alive[c + 2][c - 9] = true;
  alive[c + 1][c - 10] = true;
  alive[c + 3][c - 10] = true;
  alive[c + 1][c - 11] = true;
  alive[c + 2][c - 12] = true;
  alive[c + 3][c - 12] = true;
  alive[c + 5][c - 12] = true;
  alive[c + 5][c - 13] = true;
  alive[c + 6][c - 17] = true;
  alive[c + 7][c - 17] = true;
  alive[c + 6][c - 18] = true;
  alive[c + 7][c - 18] = true;

  alive[c - 9][c - 2] = true;
  alive[c - 10][c - 1] = true;
  alive[c - 10][c - 3] = true;
  alive[c - 11][c - 1] = true;
  alive[c - 12][c - 2] = true;
  alive[c - 12][c - 3] = true;
  alive[c - 12][c - 5] = true;
  alive[c - 13][c - 5] = true;
  alive[c - 17][c - 6] = true;
  alive[c - 17][c - 7] = true;
  alive[c - 18][c - 6] = true;
  alive[c - 18][c - 7] = true;
  alive[c - 11][c - 12] = true;
  alive[c - 11][c - 13] = true;
  alive[c - 12][c - 11] = true;
  alive[c - 12][c - 14] = true;
  alive[c - 13][c - 11] = true;
  alive[c - 13][c - 13] = true;
  alive[c - 14][c - 12] = true;
  alive[c - 2][c - 9] = true;
  alive[c - 1][c - 10] = true;
  alive[c - 3][c - 10] = true;
  alive[c - 1][c - 11] = true;
  alive[c - 2][c - 12] = true;
  alive[c - 3][c - 12] = true;
  alive[c - 5][c - 12] = true;
  alive[c - 5][c - 13] = true;
  alive[c - 6][c - 17] = true;
  alive[c - 7][c - 17] = true;
  alive[c - 6][c - 18] = true;
  alive[c - 7][c - 18] = true;

  return alive;
};

export const GetRandom = () => {
  const alive: boolean[][] = [];
  for (let i = 0; i < DIMENTIONS; i++) {
    alive.push([false]);
    for (let j = 0; j < DIMENTIONS; j++) {
      alive[i][j] = Math.random() < 0.5 ? true : false;
    }
  }

  return alive;
};
