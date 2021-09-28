import React, { useState } from "react";
import { Contacts } from "./components/Contacts";
import { AddContact } from "./components/AddContact";

export const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <AddContact
        newName={newName}
        setNewName={setNewName}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} />
    </div>
  );
};
