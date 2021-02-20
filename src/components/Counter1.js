import React from "react";

const Counter1 = props => {
  return (
    <>
      <div>
        Counter1:{props.counter} {props.isEven}
      </div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </>
  );
};

//export default Counter1;
export default React.memo(Counter1);
