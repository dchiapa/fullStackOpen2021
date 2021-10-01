import React from "react";

import { Button } from "./Button";

export const Contact = ({ contact, handleDelete }) => {
  return (
    <li>
      {contact.name}: {contact.phone}
      <Button id={contact.id} handleDelete={handleDelete} />
    </li>
  );
};
