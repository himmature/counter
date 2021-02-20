import React from "react";

const Counter2 = props => {
  return (
    <>
      <div>Counter2:{props.counter}</div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </>
  );
};

//export default Counter2;
export default React.memo(Counter2);
