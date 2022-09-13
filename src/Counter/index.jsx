import { useSignal } from "@preact/signals";

import * as styles from "./styles.module.css";

function Counter({ initialCount }) {
  const count = useSignal(initialCount);

  const increment = () => {
    count.value += 1;
  };

  const decrement = () => {
    if (count.value !== 0) count.value -= 1;
  };

  return (
    <div class={styles.container}>
      <button onClick={decrement} class={styles.dec} aria-label="Decrease">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
        </svg>
      </button>
      <span class={styles.counter}>{count.value}</span>
      <button onClick={increment} class={styles.inc} aria-label="Increase">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
        </svg>
      </button>
    </div>
  );
}

export default Counter;
