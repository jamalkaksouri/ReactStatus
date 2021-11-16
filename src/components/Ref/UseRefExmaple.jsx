import React, { useRef, useState, useEffect } from "react";

const UseRefExample = () => {
  const previousValue = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  const resetHandler = () => {
    setInputValue("");
    previousValue.current.focus();
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        // ref={previousValue}
        onChange={changeHandler}
      />
      <button onClick={resetHandler}>Reset</button>
      <p>
        My name is {inputValue} and it used to be {previousValue.current}
      </p>
    </div>
  );
};

export default UseRefExample;
