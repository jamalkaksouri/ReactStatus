import React, { useState, useEffect } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("Hello Cleanup theory");
      setCount((prev) => prev.count + 1);
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  }, [count]);

  return <div>functional interval</div>;
};

export default FunctionalTimer;
