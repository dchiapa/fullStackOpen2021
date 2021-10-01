import React from "react";
import { Contact } from "./Contact";

export const Contacts = ({ filterContacts }) => {
  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact key={contact.name} contact={contact} />
      ))}
    </ul>
  );
};
