import React, { useState, useEffect } from "react";

const useKeyPress = (targetKey) => {
  const [isDown, setIsDown] = useState(false);
  window.addEventListener("keydown", (e) => {
    if (targetKey === e.key) {
      setIsDown(true);
    }
  });
  window.addEventListener("keyup", (e) => {
    if (targetKey === e.key) {
      setIsDown(false);
    }
  });
  return isDown;
};

const KeyPress = () => {
  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const cPressed = useKeyPress("c");
  const mPressed = useKeyPress("m");
  const hPressed = useKeyPress("h");
  return (
    <div>
      <h2>useKeyPress</h2>
      <ul>
        <li>Pressed 'k': {kPressed && "K"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
        <li>Pressed 'm': {mPressed && "M"}</li>
        <li>Pressed 'c': {cPressed && "C"}</li>
        <li>Pressed 'h': {hPressed && "H"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
      </ul>
    </div>
  );
};

export default KeyPress;
