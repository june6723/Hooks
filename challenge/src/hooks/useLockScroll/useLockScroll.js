import React, { useState, useEffect } from "react";

const useLockScroll = () => {
  const [isLocked, setIsLocked] = useState();
  const lockScroll = () => setIsLocked(true);
  const unLockScroll = () => setIsLocked(false);

  useEffect(() => {}, [isLocked]);

  return [isLocked, { lockScroll, unLockScroll }];
};

const LockScrollScreen = () => {
  return (
    <div>
      <h2>useLockScroll</h2>
      <button>Lock Scroll</button>
      <button>Unlock Scroll</button>
    </div>
  );
};

export default LockScrollScreen;
