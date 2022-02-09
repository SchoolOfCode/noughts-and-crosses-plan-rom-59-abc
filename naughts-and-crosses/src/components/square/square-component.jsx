import { Square } from "./square-styles";
import ButtonComponent from "../button/button-component";

function SquareComponent({ XMove, toggleXMove }) {
  return (
    <Square>
      <ButtonComponent XMove={XMove} toggleXMove={toggleXMove} />
    </Square>
  );
}

export default SquareComponent;
