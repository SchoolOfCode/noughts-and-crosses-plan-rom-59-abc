import { useState, useCallback } from "react";

function useToggle(initialXMove) {
  const [XMove, setXMove] = useState(initialXMove);
  const toggle = useCallback(() => setXMove((XMove) => !XMove), []);
  return [XMove, toggle];
}

export default useToggle;
