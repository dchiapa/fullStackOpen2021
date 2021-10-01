import React from "react";
import { Contact } from "./Contact";

export const Contacts = ({ filterContacts, handleDelete }) => {
  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.name}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
