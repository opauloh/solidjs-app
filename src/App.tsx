import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Counter } from "./Counter";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>This really looks like React, but it's more "Solid"?</p>
        <i>
          Just playing around and checking if not having a Virtual DOM really
          make it fast and better than React.
        </i>
        <Counter />
      </header>
    </div>
  );
};

export default App;
