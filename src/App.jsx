import { useState } from "react";
import Button from "./button";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  return (
    <div
      style={{
        backgroundColor: color,
        textAlign: "center",
        margin: "50px",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "pink" }}>Count : {count}</h1>
      <Button text="Increment" onClick={() => setCount(count + 1)}></Button>
      <br></br>
      <Button text="Decrement" onClick={() => setCount(count - 1)}></Button>
      <br></br>
      <Button text="Reset" onClick={() => setCount(0)}></Button>

      <br />
      <Button text="change to Red" onClick={() => setColor("red")}></Button>
      <br />
      <Button text="change to Blue" onClick={() => setColor("blue")}></Button>
      <br />
      <Button
        text="change to Yellow"
        onClick={() => setColor("yellow")}
      ></Button>
    </div>
  );
}

export default App;
