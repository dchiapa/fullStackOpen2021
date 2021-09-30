import React from "react";

export const CountryList = ({ filteredCountries, setFilter }) => {
  const handleCountryShow = (e) => {
    setFilter(e.target.name);
  };
  return (
    <section>
      {filteredCountries.length === 1 ? (
        <>
          <h2>{filteredCountries[0].name.official}</h2>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Population: {filteredCountries[0].population}</p>
          <h3>Languages</h3>
          <ul>
            {Object.values(filteredCountries[0].languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={filteredCountries[0].flags.png} alt="flag" />
        </>
      ) : filteredCountries.length <= 10 ? (
        <>
          <h2>Countries List</h2>
          <ul>
            {filteredCountries.map((country) => {
              return (
                <li key={country.name.official}>
                  {country.name.official}
                  <button
                    onClick={handleCountryShow}
                    name={country.name.official}
                  >
                    Show
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </section>
  );
};
