import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Damla");
  const [age, setAge] = useState(25);
  const [family, setFamily] = useState(["Bob ", "Janice "]);
  const [adress, setAdress] = useState({
    title: "Amsterdam",
    zip: 45745,
  });

  console.log(name, age, family, adress);

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <button onClick={() => setName("Erva")}>Change Name</button>
      {/* //buttona tıklandıktan sonra name erva olarak değişir. */}
      <h2>Ben {age} yaşındayım.</h2>
      <button onClick={() => setAge("30")}>Change age</button>

      <h2>ebeveynlerimin isimleri</h2>
      {family.map((family, index) => (
        <div key={index}>{family}</div>
      ))}
      <button
        onClick={() =>
          setFamily([
            ...family,
            <h3>Kardeslerimin isimleri</h3>,
            "Damla",
            "Erva",
          ])
        }
      >
        Add new family member
      </button>

      <h2>Adress</h2>
      <div>
        {adress.title} {adress.zip}
      </div>

      <button
        onClick={() => setAdress({ ...adress, title: "Newyork", zip: "45478" })}
      >
        Update adress
      </button>
    </div>
  );
}

export default App;
