import React, { useCallback, useEffect } from "react";

import { useCount } from "../../context/Count";

function Counter() {
  const { count, setCount } = useCount();

  const increaseCounter = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const resetCounter = useCallback(() => {
    setCount(0);
  }, [setCount]);

  useEffect(() => {
    const storage = localStorage.getItem("counter");

    if (storage) {
      setCount(JSON.parse(storage));
    }
  }, [setCount]);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <span>
        <b>Count: </b>
        {count}
      </span>

      <br />

      <button onClick={increaseCounter}>Increase</button>

      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
