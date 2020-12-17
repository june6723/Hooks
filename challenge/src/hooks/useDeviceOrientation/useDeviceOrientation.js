import React, { useState } from "react";

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState();
  const [beta, setBeta] = useState();
  const [gamma, setGamma] = useState();
  const handleOrientation = (e) => {
    setAlpha(e.alpha);
    setBeta(e.beta);
    setGamma(e.gamma);
  };
  window.addEventListener("deviceorientation", handleOrientation);
  return { alpha, beta, gamma };
};

const DeviceOrientation = () => {
  const { alpha, beta, gamma } = useDeviceOrientation();
  return (
    <div>
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>Alpha : {alpha ? alpha : "Null"}</li>
        <li>Beta : {beta ? beta : "Null"}</li>
        <li>Gamma : {gamma ? gamma : "Null"}</li>
      </ul>
    </div>
  );
};

export default DeviceOrientation;
