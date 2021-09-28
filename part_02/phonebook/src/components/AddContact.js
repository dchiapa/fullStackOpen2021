import React from "react";

export const AddContact = ({
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  persons,
  setPersons,
}) => {
  const handleName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const handlePhone = (e) => {
    e.preventDefault();
    setNewPhone(e.target.value);
  };
  const findName = (person) => {
    return person.name === newName;
  };
  const findPhone = (person) => {
    return person.phone === newPhone;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName !== "" && newPhone !== "") {
      if (persons.find(findName)) {
        alert(`${newName} is already added to phonebook`);
      } else if (persons.find(findPhone)) {
        alert(`${newPhone} is already added to phonebook`);
      } else {
        setPersons([...persons, { name: newName, phone: newPhone }]);
        setNewName("");
        setNewPhone("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
