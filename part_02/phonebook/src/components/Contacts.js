import React from "react";
import { Contact } from "./Contact";
export const Contacts = ({ filterPersons }) => {
  const filteredPersons = filterPersons();
  return (
    <ul>
      {filteredPersons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </ul>
  );
};
