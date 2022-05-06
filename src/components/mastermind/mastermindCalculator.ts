interface calculateGuessProps {
  guess: Array<number>;
  keyCode: Array<number>;
}

export function CalculateGuess(props: calculateGuessProps) {
  const guessClues = [0, 0, 0, 0, 0];
  const keyCodeClues = [0, 0, 0, 0, 0];
  let correctPlace = 0;
  let incorrectPlace = 0;
  for (let i = 0; i < props.keyCode.length; i++) {
    if (props.guess[i] === props.keyCode[i]) {
      guessClues[i] = 2;
      keyCodeClues[i] = 2;
      correctPlace += 1;
    }
  }

  for (let i = 0; i < props.keyCode.length; i++) {
    if (guessClues[i] === 0) {
      for (let j = 0; j < props.keyCode.length; j++) {
        if (guessClues[i] === 0 && keyCodeClues[j] === 0) {
          if (props.guess[i] === props.keyCode[j]) {
            guessClues[i] = 1;
            keyCodeClues[j] = 1;
            incorrectPlace += 1;
          }
        }
      }
    }
  }

  return [correctPlace, incorrectPlace];
}
