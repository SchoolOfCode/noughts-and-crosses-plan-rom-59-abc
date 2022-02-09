import { Board } from "./board-styles";
import SquareComponent from "../square/square-component";

function BoardComponent({ board }) {
  return (
    <Board>
      {board.map((arr) => {
        return arr.map(({ value }, index) => {
          return <SquareComponent key={index} val={value} />;
        });
      })}
    </Board>
  );
}

export default BoardComponent;
