import React from "react";

export const CountryFilter = ({ filter, setFilter }) => {
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section>
      <h2>Country Filter</h2>
      <label>Filter countries: </label>
      <input type="text" value={filter} onChange={handleFilter} />
    </section>
  );
};
