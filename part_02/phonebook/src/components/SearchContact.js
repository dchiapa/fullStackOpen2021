import React from "react";

export const SearchContact = ({ filter, handleNameSearch }) => {
  return (
    <form>
      <label>filter shown with:</label>
      <input type="text" value={filter} onChange={handleNameSearch} />
    </form>
  );
};
