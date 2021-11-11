import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comp from "./components/Comp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Comp />
    </div>
  );
}

export default App;
