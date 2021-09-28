import React from "react";

export const SearchContact = ({ filter, setFilter }) => {
  const handleName = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  return (
    <form>
      <label>filter shown with:</label>
      <input type="text" value={filter} onChange={handleName} />
    </form>
  );
};
