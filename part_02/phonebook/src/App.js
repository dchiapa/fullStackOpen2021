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
  //* events controlers to AddContact
  const handleName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const handlePhone = (e) => {
    e.preventDefault();
    setNewPhone(e.target.value);
  };
  const findPersonName = (person) => {
    return person.name === newName;
  };
  const findPersonPhone = (person) => {
    return person.phone === newPhone;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName !== "" && newPhone !== "") {
      if (persons.find(findPersonName)) {
        alert(`${newName} is already added to phonebook`);
      } else if (persons.find(findPersonPhone)) {
        alert(`${newPhone} is already added to phonebook`);
      } else {
        setPersons([...persons, { name: newName, phone: newPhone }]);
        setNewName("");
        setNewPhone("");
      }
    }
  };
  //* events controlers to Contacts
  const filterPersons = () => {
    let filteredPersons = persons;
    if (filter !== "") {
      filteredPersons = persons.filter(
        (person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
    }
    return filteredPersons;
  };
  //* events controlers to SearchContact
  const handleNameSearch = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchContact filter={filter} handleNameSearch={handleNameSearch} />
      <h2>Add Contact</h2>
      <AddContact
        newName={newName}
        newPhone={newPhone}
        handleName={handleName}
        handlePhone={handlePhone}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Contacts filterPersons={filterPersons} />
    </div>
  );
};
