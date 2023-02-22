import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Damla Erva");
  const [surname, setSurname] = useState("Kasal");
  const [age, setAge] = useState(25);
  const [loc, setLoc] = useState("Amsterdam");
  const [col, setCol] = useState("Purple");

  const onChangeSurname = (event) => setSurname(event.target.value);
  const onChangeAge = (event) => setAge(event.target.value);
  const onChangeLoc = (event) => setLoc(event.target.value);
  const onChangeCol = (event) => setCol(event.target.value);

  console.log(name, surname, age, loc, col);
  return (
    <div>
      Name <br />
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />{" "}
      <br />
      Surname <br />
      <input
        type="text"
        placeholder="Enter a surname"
        value={surname}
        onChange={onChangeSurname}
      />{" "}
      <br />
      Age <br />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={onChangeAge}
      />{" "}
      <br />
      Location <br />
      <input
        type="text"
        placeholder="Enter adress"
        value={loc}
        onChange={onChangeLoc}
      />{" "}
      <br />
      Favorite colour <br />
      <form action="" value={col} onChange={onChangeCol}>
        <input type="checkbox" name="colour1" id="colur1" value="Purple" />
        <label htmlFor="colour1">Purple</label>
        <input type="checkbox" name="colour2" id="colur2" value="Black" />
        <label htmlFor="colour2">Black</label>
      </form>
      Benim adim {name} ,soyadim {surname}. {age} yaşindayim. {loc} yasiyorum.
      En sevdigim renk {col}
    </div>
  );
}

//hata alıyorum mesela sayfa üzerinde ismini yazdığımda consolda ya da sayfada yaptığım değişiklik gözükmüyor

// function InputExample() {
//   const [form, setForm] = useState({
//     name: "Damla Erva",
//     surname: "Kasal",
//     age: "25",
//     loc: "amsterdam",
//     col: "Purple",
//   });

//   const onChangeInput = (event, field) => {
//     setForm({ ...form, [field]: event.target.value });
//     console.log(event.target);
//   };
//   return (
//     <div>
//       Name <br />
//       <input
//         type="text"
//         placeholder="Enter a name"
//         value={form.name}
//         onChange={(e) => onChangeInput(e, "name")}
//       />{" "}
//       <br />
//       Surname <br />
//       <input
//         type="text"
//         placeholder="Enter a surname"
//         value={form.surname}
//         onChange={(e) => onChangeInput(e, "surname")}
//       />{" "}
//       <br />
//       Age <br />
//       <input
//         type="number"
//         placeholder="Enter age"
//         value={form.age}
//         onChange={(e) => onChangeInput(e, "age")}
//       />{" "}
//       7
//       <br />
//       Location <br />
//       <input
//         type="text"
//         placeholder="Enter adress"
//         value={form.loc}
//         onChange={(e) => onChangeInput(e, "loc")}
//       />{" "}
//       <br />
//       Favorite colour <br />
//       <form action="" value={form.col} onChange={onChangeInput}>
//         <input type="checkbox" name="colour1" id="colur1" value="Purple" />
//         <label htmlFor="colour1">Purple</label>
//         <input type="checkbox" name="colour2" id="colur2" value="Black" />
//         <label htmlFor="colour2">Black</label>
//       </form>
//       Benim adim {form.name} ,soyadim {form.surname}. {form.age} yaşindayim.{" "}
//       {form.loc} yasiyorum. En sevdigim renk {form.col}
//     </div>
//   );
// }

export default InputExample;
