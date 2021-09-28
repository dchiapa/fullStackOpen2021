import React, { useState } from "react";
import { Contacts } from "./components/Contacts";
import { AddContact } from "./components/AddContact";
import { SearchContact } from "./components/SearchContact";

export const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchContact filter={filter} setFilter={setFilter} />
      <h2>Add Contact</h2>
      <AddContact
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} filter={filter} />
    </div>
  );
};
