import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // console.log(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Hello Sob Countries: {countries.length}</h3>

      <div className="countries-container">
        {/* {countries.map((country) => console.log(country))} */}
        {countries.map((country) => (
          //sob data country er maddome props e patano holo
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
