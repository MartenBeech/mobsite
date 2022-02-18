interface props {
  state: any;
  setState: any;
}

export const SetNewCellConditions = (props: props) => {
  let alive: boolean[][] = copyOf2dArray(props.state.alive, props);

  for (let i = 0; i < props.state.columns.length; i++) {
    for (let j = 0; j < props.state.rows.length; j++) {
      let neighbours = 0;
      if (isCellAlive(i - 1, j - 1, props)) {
        neighbours++;
      }
      if (isCellAlive(i - 1, j, props)) {
        neighbours++;
      }
      if (isCellAlive(i - 1, j + 1, props)) {
        neighbours++;
      }
      if (isCellAlive(i, j - 1, props)) {
        neighbours++;
      }
      if (isCellAlive(i, j + 1, props)) {
        neighbours++;
      }
      if (isCellAlive(i + 1, j - 1, props)) {
        neighbours++;
      }
      if (isCellAlive(i + 1, j, props)) {
        neighbours++;
      }
      if (isCellAlive(i + 1, j + 1, props)) {
        neighbours++;
      }

      if (props.state.alive[i][j]) {
        if (neighbours < 2 || neighbours > 3) {
          alive[i][j] = false;
        }
      } else if (!props.state.alive[i][j]) {
        if (neighbours === 3) {
          alive[i][j] = true;
        }
      }
    }
  }
  props.setState({
    ...props.state,
    alive: alive,
    evolutions: props.state.evolutions + 1,
  });
};

const copyOf2dArray = (data: Array<any>[], props: props) => {
  let alive: boolean[][] = [];
  props.state.columns.map((column: number) => {
    alive.push([]);
    return props.state.rows.map((row: number) => {
      return (alive[column][row] = data[column][row]);
    });
  });
  return alive;
};

const isCellAlive = (column: number, row: number, props: props) => {
  if (
    row < 0 ||
    column < 0 ||
    column >= props.state.columns.length ||
    row >= props.state.rows.length
  ) {
    return false;
  }
  if (props.state.alive[column][row]) {
    return true;
  }
  return false;
};
