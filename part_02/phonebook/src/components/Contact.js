import React from "react";

export const Contact = ({ person }) => {
  return <li key={person.name}>{person.name}</li>;
};
