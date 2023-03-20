import { useState } from "react";
import data from "../data";

export function Main(props) {
  const [count, setCount] = useState(10);
  const items = data
    .slice(0, count)
    .map((item) => <li key={item.id}>{item.description}</li>);

  function handleClick() {
    setCount(count + 10);
  }

  // show the button ONLY when count is less than the length of the data array
  const showBtn = count < data.length;

  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about the USA</h1>
      <ol className="main--facts">{items}</ol>
      {showBtn && <button onClick={handleClick}>Load More</button>}
    </main>
  );
}
