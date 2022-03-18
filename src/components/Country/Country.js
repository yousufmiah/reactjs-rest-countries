import React from "react";
import "./Country.css";

//country er sob data props ace, props country er data receive kore
const Country = (props) => {
  const { area, region, name, flags } = props.country;
  // console.log(props.country);

  return (
    <div className="country bg-primary">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;

//====================
//====================
/* import React from "react";
import "./Country.css";

//country er sob data props ace
const Country = (props) => {
  // console.log(props.country.area);
  //desctring object, jeheto props.country er modde ace tai
  const { area, region, population, name } = props.country;

  return (
    <div className="country">
      <h2>Country Name:{name.common}</h2>
      <p>Population: {population}</p>
      <p>
        <small>Area: {region}</small>
      </p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
 */
