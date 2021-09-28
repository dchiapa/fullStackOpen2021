import React from "react";

export const AddContact = ({ newName, setNewName, persons, setPersons }) => {
  const handleName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const findPerson = (person) => {
    return person.name === newName;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName !== "") {
      if (persons.find(findPerson)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setPersons([...persons, { name: newName }]);
        setNewName("");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleName} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
