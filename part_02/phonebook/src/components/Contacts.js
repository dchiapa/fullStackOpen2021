import React from "react";
import { Contact } from "./Contact";
export const Contacts = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </ul>
  );
};
