import React, { useState } from "react";

const useGeolocation = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  //   const [coords, setCoords] = useState();
  const [error, setError] = useState();

  const success = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    // setCoords(position.coords);
    setError("Null");
  };
  const getError = () => {
    setError("Unable to retrieve your location");
    setLat("null");
    setLon("null");
    // setCoords("null");
  };
  if (!navigator.geolocation) {
    setError("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, getError);
  }
  return { lat, lon, error };
};

const Geolocation = () => {
  const { lat, lon, error } = useGeolocation();
  return (
    <div>
      <h2>useGeolocation</h2>
      <ul>
        <li>Latitude : {lat}</li>
        <li>Longitude : {lon}</li>
        <li>Geolocation Error : {error}</li>
      </ul>
    </div>
  );
};

export default Geolocation;
