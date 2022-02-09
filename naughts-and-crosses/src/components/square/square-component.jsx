import { Square } from "./square-styles";
import ButtonComponent from "../button/button-component";

function SquareComponent({ XMove, toggleClick, key, reset, result }) {
  return (
    <Square>
      <ButtonComponent
        XMove={XMove}
        toggleClick={toggleClick}
        key={key}
        reset={reset}
        result={result}
      />
    </Square>
  );
}

export default SquareComponent;
