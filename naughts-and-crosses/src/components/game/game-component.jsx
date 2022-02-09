import { useState } from "react";
import { Game } from "./game-styles";
import HeaderComponent from "../header/header-component";
import PlayerMoveComponent from "../player-move/player-move-component";
import BoardComponent from "../board/board-component";
import ResultComponent from "../result/result-component";
import ResetComponent from "../reset/reset-component";

function GameComponent() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [XMove, setXMove] = useState(false);

  function reset() {
    console.log("reset game");
  }

  return (
    <Game>
      <HeaderComponent />
      <PlayerMoveComponent move={XMove ? "X" : "O"} />
      <BoardComponent board={board} />
      <ResultComponent result="X Wins" />
      <ResetComponent onClick={reset} />
    </Game>
  );
}

export default GameComponent;
