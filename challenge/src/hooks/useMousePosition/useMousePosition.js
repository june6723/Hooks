import React, { useState, useEffect } from "react";

const useMousePosition = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const logMouse = (e) => {
    setX(e.screenX);
    setY(e.screenY);
  };
  useEffect(() => {
    document.addEventListener("mousemove", logMouse);
  });
  return { x, y };
};

const MousePosotion = () => {
  const { x, y } = useMousePosition();
  return (
    <div>
      <h2>useMousePosition</h2>
      <ul>
        <li>Mouse X : {x} </li>
        <li>Mouse Y : {y}</li>
      </ul>
    </div>
  );
};

export default MousePosotion;
