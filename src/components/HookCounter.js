import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  // ? update state based on perevious state => callback function!!!

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={addTwoHandler}>Add Two</button>
      <button onClick={addFiveHandler}>Add Five</button>
    </div>
  );
};

// export default HookCounter;

// class HookCounter extends Component {
//     state = {
//         count: 0
//     }
//     addOneHandler = () => {
//         this.setState(
//             {
//                 count: this.state.count + 1
//             }
//         );
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Count - {this.state.count}</h2>
//                 <button onClick={this.addOneHandler}>Add One</button>
//             </div>
//         )
//     }
// }

export default HookCounter;
