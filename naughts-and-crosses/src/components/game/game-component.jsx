import { useState, useEffect } from "react";
import { Game } from "./game-styles";
import HeaderComponent from "../header/header-component";
import ResetComponent from "../reset/reset-component";
import BoardComponent from "../board/board-component";
import PlayerMoveComponent from "../player-move/player-move-component";
import ResultComponent from "../result/result-component";
import { checkWinner } from "../../functions/checkWinner";
import useToggle from "../../hooks/toggleMove";

function GameComponent() {
  const [resetToggle, setResetToggle] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [XMove, toggle] = useToggle(false);
  const [result, setResult] = useState(false);
  const [resultText, setResultText] = useState("");

  function reset() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setResetToggle(!resetToggle);
    setResult(false);
  }

  function toggleClick(key) {
    let symbol = XMove ? "X" : "O";
    setBoard([...board.slice(0, key), symbol, ...board.slice(key + 1)]);
    toggle();
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

  return (
    <Game>
      <HeaderComponent />
      <PlayerMoveComponent move={XMove ? "X" : "O"} />
      <BoardComponent
        toggleClick={toggleClick}
        XMove={XMove}
        resetToggle={resetToggle}
        result={result}
        resultText={resultText}
        board={board}
      />
      {result && <ResultComponent result={resultText} />}
      <ResetComponent onClick={reset} />
    </Game>
  );
}

export default GameComponent;
