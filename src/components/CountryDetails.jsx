import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/${countryName}")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return console.log(data);
        setCountryData(data[0]);
      });
  }, [countryName]);
  return (
    <>
      <div className="container">
        country
        <div className="card">
          <img
            src={countryData.flags.png}
            className="card-img-top"
            alt={countryData.flags.alt}
          />
          <div className="card-body">
            <h5 className="card-title">{countryData.name.common}</h5>
            <p className="card-text">Population: {countryData.population}</p>
            <p className="card-text">Region: {countryData.region}</p>
            <p className="card-text">Sub-Region: {countryData.subregion}</p>
            <p className="card-text">Capital: {countryData.capital}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
