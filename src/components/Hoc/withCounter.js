import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
      setCount((prev) => prev + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrememntCount={incrementHandler}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};

export default withCounter;
