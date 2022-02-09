import { Board } from "./board-styles";
import SquareComponent from "../square/square-component";

function BoardComponent({ toggleClick, XMove, resetToggle, result, board }) {
  return (
    <div>
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
    </div>
  );
}

export default BoardComponent;
