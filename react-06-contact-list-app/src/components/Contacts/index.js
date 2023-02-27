import React from "react";
import { useState, useEffect } from "react";
import List from "./List";
import Form from "./List/Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Damla",
      phone_number: "123123",
    },
    {
      fullname: "ken",
      phone_number: "456951",
    },
    {
      fullname: "nehir",
      phone_number: "753951",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
