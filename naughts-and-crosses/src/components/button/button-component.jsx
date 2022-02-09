import { Button } from "./button-styles";
import { useState, useEffect } from "react";

function ButtonComponent({ XMove, toggleClick, key, reset, result }) {
  const [symbol, setSymbol] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setSymbol("");
    setIsDisabled(false);
  }, [reset]);

  function changeSymbol() {
    if (result === true) {
      return;
    }
    if (isDisabled === false) {
      let move = XMove ? "X" : "O";
      setSymbol(move);
      toggleClick(key);
      setIsDisabled(true);
    } else {
      alert("Square is occupied");
    }
  }
  return (
    <Button
      color={symbol}
      onClick={() => {
        changeSymbol();
      }}
    >
      {symbol}
    </Button>
  );
}

export default ButtonComponent;
