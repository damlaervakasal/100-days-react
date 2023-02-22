import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("State güncellendi");
  });

  useEffect(() => {
    console.log("Component mount edildi");
  }, []);

  return (
    <div className="App">
      hay
      <h3>{number} </h3>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
