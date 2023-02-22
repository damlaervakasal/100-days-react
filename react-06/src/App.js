import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("damla");

  // useEffect(() => {
  //   console.log("State güncellendi");
  // });
  // bu ifade herhangi bir state güncellendiğinde kullanılır.

  useEffect(() => {
    console.log("Number State güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("component mount edildi");
  }, []);

  //virgülden sonra array açıp içini boş bırakırsak componenti mount etmiş oluyoruz.

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Erva")}>Click</button>
    </div>
  );
}

export default App;
// hookları kullanırken hiçbir şekilde if yapısının içinde bulunmamalı,
// herhangi bir kontrolden geçmemlidir.
