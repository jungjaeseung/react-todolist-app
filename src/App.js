import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(() => console.log("call the api"), []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 4) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>Welcome back! {counter}</h1>
      <Button onClick={onClick} text={"click me"} />
    </div>
  );
}

export default App;
