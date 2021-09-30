import React, { useState, useEffect } from "react";
import axios from "axios";

import { CountryFilter } from "./components/CountryFilter";
import { CountryList } from "./components/CountryList";

function App() {
  const COUNTRIES_LIST_URL = "https://restcountries.com/v3.1/all";
  const ACCESS_KEY = "adeaf87e7e28e40cfd63fff3a79eed2b";
  const WEATHER_API_URL = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}`;

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filter, setFilter] = useState("");

  // fetch countriesData from API
  useEffect(() => {
    async function getData() {
      const response = await axios.get(COUNTRIES_LIST_URL);
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

  // get weather data from API
  useEffect(() => {
    async function getWeatherData() {
      const response = await axios.get(`${WEATHER_API_URL}&query=New%20York`);
      console.log(response);
    }
    getWeatherData();
  }, []);

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
