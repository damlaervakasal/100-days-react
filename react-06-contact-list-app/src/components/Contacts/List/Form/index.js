import React from "react";
import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  //   console.log(addContact);

  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  //   inputun içi değiştiği anda bunu state atayacak fonksiyon onchangeinput

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);

    // setForm(initialFormValues);
    // console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Add</button>
      </div>
    </form>
  );
}

export default Form;

// buttona bastığımız anda event tetiklenmesi gerekiyor
// ve inputlara veri girildiği anda bunları state e eklemesi
// lazım o yüzden useState kullandık.inputun içi değiştiği anda bunu
// state atayacak fonksiyon yazmamız gerek onchange
