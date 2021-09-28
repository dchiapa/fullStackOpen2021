import React from "react";

export const Contact = ({ person }) => {
  return (
    <li>
      {person.name}: {person.phone}
    </li>
  );
};
