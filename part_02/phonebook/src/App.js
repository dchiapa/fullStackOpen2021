import React, { useState, useEffect } from "react";

import {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} from "./services/bd.js";
import { Contacts } from "./components/Contacts";
import { AddContact } from "./components/AddContact";
import { SearchContact } from "./components/SearchContact";

export const App = () => {
  useEffect(() => {
    getAllContacts().then((response) =>
      setContacts(response.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }, []);

  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  //* events controlers to AddContact

  const handleAdd = (e) => {
    e.preventDefault();
    if (newName !== "" && newPhone !== "") {
      const id = findIdContact();
      if (id !== undefined) {
        window.confirm("Contact already exists, replace number?") &&
          updateContact(id, { name: newName, phone: newPhone }).then(
            (response) => {
              setContacts(
                contacts
                  .filter((contact) => contact.id !== id)
                  .concat(response)
                  .sort((a, b) => a.name.localeCompare(b.name))
              );
            }
          );
      } else {
        createContact({ name: newName, phone: newPhone }).then((response) => {
          setContacts(
            contacts
              .concat(response)
              .sort((a, b) => a.name.localeCompare(b.name))
          );
        });
      }
      setNewName("");
      setNewPhone("");
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
  const handleDelete = (e) => {
    window.confirm("Are you sure you want to delete this contact?") &&
      deleteContact(e.target.id).then(() => {
        setContacts(
          contacts.filter(
            (contact) => parseInt(contact.id) !== parseInt(e.target.id)
          )
        );
      });
  };
  const findIdContact = () => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return contacts.find(
        (contact) => contact.name.toLowerCase() === newName.toLowerCase()
      ).id;
    } else {
      return undefined;
    }
  };
  //* inputs events controlers
  const handleName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  const handlePhone = (e) => {
    e.preventDefault();
    setNewPhone(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchContact filter={filter} handleNameSearch={handleSearch} />
      <h2>Add Contact</h2>
      <AddContact
        newName={newName}
        newPhone={newPhone}
        handleName={handleName}
        handlePhone={handlePhone}
        handleAdd={handleAdd}
      />
      <h2>Numbers</h2>
      <Contacts filterContacts={filterContacts} handleDelete={handleDelete} />
    </div>
  );
};
