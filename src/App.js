import "./App.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* Countries component er maddome data ase show kore */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
      <h1 className="bg-danger">dhaka</h1>
    </div>
  );
}

export default App;

//====
//====
//====
/* mport logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return <div className="App"></div>;
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>visiting every country of the world.</h1>
      <h4>countries: {countries.length}</h4>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name} </h2>
      <h4>Population: {props.population}</h4>
    </div>
  );
}

export default App;
 */
