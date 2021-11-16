import React, { useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("document title updating...");
    document.title = `clicked: ${counter} times`;
  }, [counter]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter {counter}
      </button>
    </div>
  );
};

export default FunctionalCounter;
