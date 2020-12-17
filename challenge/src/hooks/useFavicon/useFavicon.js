import React, { useState, useEffect } from "react";

const useFavicon = (initialFaviconUrl) => {
  const [favicon, setFavicon] = useState(initialFaviconUrl);
  const updateFavicon = () => {
    const faviconEl = document.getElementById("favicon");
    faviconEl.href = favicon;
    console.log(`${favicon} updated!`);
  };
  useEffect(updateFavicon, [favicon]);
  return setFavicon;
};

const Favicon = () => {
  const updateIcon = useFavicon("favicon.ico");
  return (
    <div>
      <h2>useFavicon</h2>
      <button
        onClick={() => updateIcon("https://www.google.com/favicon.ico")}
        style={{ marginRight: "5px" }}
      >
        Change Favicon1
      </button>
      <button onClick={() => updateIcon("favicon.ico")}>Change Favicon2</button>
    </div>
  );
};

export default Favicon;
