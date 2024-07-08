import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data[0]);
      });
  }, [countryName]);
  const theme = "";
  return (
    <>
      <Navbar />
      {countryData && (
        <div className="container-fluid">
          <div className="text-center mb-3">
            <Link to="/" className="btn btn-primary">
              Back to Countries
            </Link>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8">
                <img
                  src={countryData.flags.png}
                  className="img-fluid rounded-start"
                  alt={countryData.flags.alt}
                />
              </div>

              <div className="col-md-4">
                <h3>{countryData.name.common}</h3>
                <p>
                  <b>Population: </b>
                  {countryData.population}
                </p>
                <p>
                  <b>Region: </b>
                  {countryData.region}
                </p>
                <p>
                  <b>Sub-Region: </b>
                  {countryData.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {countryData.capital}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
