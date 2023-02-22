import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("damla");

  // useEffect(() => {
  //   console.log("State güncellendi");
  // });
  // bu ifade herhangi bir state güncellendiğinde kullanılır.

  useEffect(() => {
    console.log("Number State güncellendi");
  }, [number]);

  //arrayin içine istediğimiz kadar state ekleyebiliriz.

  useEffect(() => {
    console.log("component mount edildi");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    // atanan intervali durdurmamız girek bunu için de js de clearInterval kullanmamız gerek
    // asenkron işlemi böylelikle durdurmuş oluyoruz ve onun içindeki state güncelleme işlemi durmuş oldu.
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Erva")}>Click</button>
    </div>
  );
}

export default Counter;

// componentin ekranda göründüğünü düşünün yani mount olmuş daha sonra component belirli aralıklarala güncelleniyor.
//  bu component ekrandan kaldırılırsa yani unmount olursa state atama işlemini yapmak saçma olacak çünkü yavaş
//  çalışmasına sebebp olacak bu yüzden kaldırılması gerek.
