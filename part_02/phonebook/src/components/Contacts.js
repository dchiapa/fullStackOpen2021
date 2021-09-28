import React from "react";
import { Contact } from "./Contact";
export const Contacts = ({ persons, filter }) => {
  const filterPersons = () => {
    if (filter === "") {
      return persons;
    }

    return persons.filter(
      (person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
  };
  const filteredPersons = filterPersons();
  return (
    <ul>
      {filteredPersons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </ul>
  );
};
