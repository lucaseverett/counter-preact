import * as styles from "./styles.module.css";
import Counter from "../Counter/index.jsx";

function App() {
  return (
    <div class={styles.container}>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
