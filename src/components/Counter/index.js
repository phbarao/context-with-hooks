import React, { useEffect } from "react";

import { useCount } from "../../context/Count";

function Counter() {
  const { count, setCount } = useCount();

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

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
