import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Calculator />
      </div>
    </>
  );
}

export default App;
