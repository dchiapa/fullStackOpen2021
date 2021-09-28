import React, { useState, useEffect } from "react";
import axios from "axios";
import { Contacts } from "./components/Contacts";
import { AddContact } from "./components/AddContact";
import { SearchContact } from "./components/SearchContact";

const URL = "http://localhost:3001/contacts";

export const App = () => {
  useEffect(() => {
    axios.get(URL).then((response) => {
      setContacts(response.data);
    });
  }, []);

  const [contacts, setContacts] = useState([]);
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
  const findContactName = (contact) => {
    return contact.name === newName;
  };
  const findContactPhone = (contact) => {
    return contact.phone === newPhone;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName !== "" && newPhone !== "") {
      if (contacts.find(findContactName)) {
        alert(`${newName} is already added to phonebook`);
      } else if (contacts.find(findContactPhone)) {
        alert(`${newPhone} is already added to phonebook`);
      } else {
        setContacts([...contacts, { name: newName, phone: newPhone }]);
        setNewName("");
        setNewPhone("");
      }
    }
  };

  //* events controlers to Contacts
  const filterContacts = () => {
    let filteredContacts = contacts;
    if (filter !== "") {
      filteredContacts = contacts.filter(
        (person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
    }
    return filteredContacts;
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
      <Contacts filterContacts={filterContacts} />
    </div>
  );
};
