import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isVisible, setIsvisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsvisible(!isVisible)}>Toggle Counter</button>
      {/* butona bastığımız anda kaldırılmasını istiyorum */}
    </div>
  );
}

export default App;
// hookları kullanırken hiçbir şekilde if yapısının içinde bulunmamalı,
// herhangi bir kontrolden geçmemlidir.
