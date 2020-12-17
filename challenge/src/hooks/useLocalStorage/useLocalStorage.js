import React, { useState, useEffect } from "react";

const useLocalStorage = (name, initValue) => {
  const [currentLS, setLS] = useState(initValue);
  useEffect(() => {
    localStorage.setItem(name, currentLS);
  }, [currentLS]);
  return { currentLS, setLS };
};

const LocalStorage = () => {
  const { currentLS, setLS } = useLocalStorage("Kimchi", "12345");
  return (
    <div>
      <h2>useLocalStorage</h2>
      <ul>
        <li style={{ marginBottom: "10px" }}>Current value : {currentLS}</li>
        <button onClick={() => setLS("12345")} style={{ marginRight: "5px" }}>
          Set value : 12345
        </button>
        <button onClick={() => setLS(null)}>Clear LS</button>
      </ul>
    </div>
  );
};
export default LocalStorage;
