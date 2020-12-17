import React, { useState, useEffect } from "react";

const useOnline = () => {
  const [online, checkOnline] = useState(navigator.onLine);

  const handleChange = () => {
    checkOnline(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return online;
};

const Online = () => {
  const isOnline = useOnline();
  return (
    <div>
      <h2>useOnline</h2>
      <span>Are we online? {isOnline ? "Yes" : "No"}</span>
    </div>
  );
};

export default Online;
