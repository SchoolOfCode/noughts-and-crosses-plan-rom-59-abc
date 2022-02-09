import { Board } from "./board-styles";
import SquareComponent from "../square/square-component";

function BoardComponent({ board, XMove, toggleXMove }) {
  return (
    <Board>
      {board.map((arr) => {
        return arr.map(({ value }, index) => {
          return (
            <SquareComponent
              key={index}
              val={value}
              XMove={XMove}
              toggleXMove={toggleXMove}
            />
          );
        });
      })}
    </Board>
  );
}

export default BoardComponent;
