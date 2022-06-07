import { Component, createEffect, createSignal, onCleanup } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  const [ammountToSum, setAmmountToSum] = createSignal(1);
  const [fastTimerIsEnabled, setFastTimerIsEnabled] = createSignal(false);

  const timer = setInterval(() => setCount(count() + ammountToSum()), 1000);

  let fastTimer: number;
  let fastTimerEnabled: number;

  createEffect(() => console.log("The latest count is", count()));

  const onMouseDownHandler = () => {
    // checking if it was just a click
    fastTimerEnabled = setTimeout(() => {
      // enable fast counter, yay!
      fastTimer = setInterval(() => {
        setAmmountToSum(ammountToSum() + 1);
        setCount(count() + ammountToSum());
      }, 30);
    }, 500);
  };

  onCleanup(() => clearInterval(timer));

  return (
    <div>
      <h1>Counter: ${count}</h1>
      <span style="color: green">Ammount to Sum: ${ammountToSum}</span>
      <p>
        <button
          onMouseDown={onMouseDownHandler}
          onMouseUp={() => {
            clearInterval(fastTimerEnabled);
            clearInterval(fastTimer);
          }}
          onClick={() => {
            setCount(count() + ammountToSum());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(0);
            setAmmountToSum(1);
          }}
        >
          Reset
        </button>
      </p>
      <i>Try holding click on increment button to make it count faster!</i>
    </div>
  );
};
