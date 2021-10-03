import React from "react";

export const AddContact = ({
  newName,
  newPhone,
  handleName,
  handlePhone,
  handleAdd,
}) => {
  return (
    <form onSubmit={handleAdd}>
      <div>
        name: <input value={newName} onChange={handleName} required />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhone} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
