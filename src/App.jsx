import { useState } from "react";
import "./global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.App}>
      <SideBar />
      <div>principal content</div>
    </div>
  );
}

export default App;
