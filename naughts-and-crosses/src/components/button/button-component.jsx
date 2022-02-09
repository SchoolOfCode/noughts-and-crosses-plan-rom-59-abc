import { Button } from "./button-styles";
import { useState } from "react";

function ButtonComponent({ XMove, toggleXMove }) {
  const [symbol, setSymbol] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function changeSymbol() {
    if (isDisabled === false) {
      let move = XMove ? "X" : "O";
      setSymbol(move);
      toggleXMove();
      setIsDisabled(true);
    } else {
      alert("Square is occupied");
    }
  }
  return (
    <Button
      onClick={() => {
        changeSymbol();
      }}
    >
      {symbol}
    </Button>
  );
}

export default ButtonComponent;
// onClick:
// insert the symbol into place of whoevers move it is
// toggle XMove
