import React, { useState, useEffect } from "react";

const useLockScroll = () => {
  const [isLocked, setIsLocked] = useState(false);
  const lockScroll = () => {
    setIsLocked(true);
  };
  const unLockScroll = () => setIsLocked(false);

  useEffect(() => {
    if (isLocked) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
  }, [isLocked]);

  return [isLocked, { lockScroll, unLockScroll }];
};

const LockScrollScreen = () => {
  const [isLocked, { lockScroll, unLockScroll }] = useLockScroll();
  return (
    <div>
      <h2>useLockScroll</h2>
      <button onClick={lockScroll}>Lock Scroll</button>
      <button onClick={unLockScroll}>Unlock Scroll</button>
    </div>
  );
};

export default LockScrollScreen;
