import React from "react";

export const Button = ({ handleDelete, id }) => {
  return (
    <button id={id} onClick={handleDelete}>
      delete
    </button>
  );
};
