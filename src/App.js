import React, { useState, useCallback } from "react";
import "./style.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);
  const incrementOne = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);
  const decrementOne = useCallback(() => {
    setCounter1(counter1 - 1);
  }, [counter1]);
  const incrementTwo = useCallback(() => {
    setCounter2(counter2 + 10);
  }, [counter2]);
  const decrementTwo = useCallback(() => {
    setCounter2(counter2 - 10);
  }, [counter2]);

  const isEven = () => {
    let i = 0;
    while (i < 99999999) i++;
    return counter1 % 2 === 0 ? "Even" : "Odd";
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Counter1
        isEven={isEven()}
        counter={counter1}
        increment={incrementOne}
        decrement={decrementOne}
      />
      <p />
      <Counter2
        counter={counter2}
        increment={incrementTwo}
        decrement={decrementTwo}
      />
    </div>
  );
}
