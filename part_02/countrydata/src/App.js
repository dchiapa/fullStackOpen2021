import React, { useState, useEffect } from "react";
import axios from "axios";

import { CountryFilter } from "./components/CountryFilter";
import { CountryList } from "./components/CountryList";

function App() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filter, setFilter] = useState("");

  // fetch data from API
  useEffect(() => {
    async function getData() {
      const response = await axios.get(API_URL);
      setCountries(response.data);
    }
    getData();
  }, []);

  // filter countries
  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.official.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
  }, [countries, filter]);

  return (
    <main>
      <h1>Country Data</h1>
      <CountryFilter filter={filter} setFilter={setFilter} />
      <CountryList
        filteredCountries={filteredCountries}
        setFilter={setFilter}
      />
    </main>
  );
}

export default App;
