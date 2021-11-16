import { useRef, useEffect, useState } from "react";

//? 1. Create a ref
//? 2. Update ref by useEffect when current state is changed.

const UseRefStorePreviousValue = () => {
  const [count, setCount] = useState(0);
  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = count; //!does not re-render component | تغییر دادن رفرنس کامپوننت را ری رندر نمیکنه
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        Gnerate Random
      </button>
      <p>Current number generated is: {count}</p>

      {/* این مقدار قبل از آپدیت شدن تو یوزافکت است */}
      <p>Previous number generated is: {previousValue.current}</p>
    </div>
  );
};

export default UseRefStorePreviousValue;
