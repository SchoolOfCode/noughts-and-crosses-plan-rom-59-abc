import { useState, useEffect } from "react";
import { Board } from "./board-styles";
import SquareComponent from "../square/square-component";
import PlayerMoveComponent from "../player-move/player-move-component";
import ResultComponent from "../result/result-component";
import ResetComponent from "../reset/reset-component";

function BoardComponent() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [XMove, setXMove] = useState(false);
  const [result, setResult] = useState(false);
  const [resetToggle, setResetToggle] = useState(false);
  const [resultText, setResultText] = useState("");

  function reset() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setResetToggle(!resetToggle);
    console.log(board);
    setResult(false);
  }

  function toggleClick(key) {
    let symbol = XMove ? "X" : "O";
    let newBoard = [...board.slice(0, key), symbol, ...board.slice(key + 1)];
    setBoard(newBoard);
    setXMove(!XMove);
    console.log(board);
  }

  useEffect(() => {
    if (checkWinner(board) === true) {
      setResult(true);
      setResultText(`${XMove ? "O" : "X"} Wins!`);
    } else if (board.indexOf("") === -1 && checkWinner(board) === false) {
      setResult(true);
      setResultText("Draw!");
    } else {
      return;
    }
  }, [board, XMove]);

  function checkWinner(arr) {
    let options = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 9],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < options.length; i++) {
      const [a, b, c] = options[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <PlayerMoveComponent move={XMove ? "X" : "O"} />
      <Board>
        {board.map((value, index) => {
          return (
            <SquareComponent
              key={index}
              XMove={XMove}
              toggleClick={() => {
                toggleClick(index);
              }}
              reset={resetToggle}
              result={result}
            />
          );
        })}
      </Board>
      {result && <ResultComponent result={resultText} />}
      <ResetComponent onClick={reset} />
    </div>
  );
}

export default BoardComponent;
