import { Game } from "./game-styles";
import HeaderComponent from "../header/header-component";

import BoardComponent from "../board/board-component";

function GameComponent() {
  return (
    <Game>
      <HeaderComponent />
      <BoardComponent />
    </Game>
  );
}

export default GameComponent;
