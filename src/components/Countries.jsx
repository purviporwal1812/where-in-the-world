import { useEffect, useState } from "react";
import "../styles/Countries.css";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Countries = ({ filterName, filterContinent }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, []);
  const theme = "";
  return (
    <div className={`container ${theme}`}>
      <div className={`row`}>
        {country
          .filter((item) =>
            filterContinent === "All"
              ? item.name.common
                  .toLowerCase()
                  .includes(filterName.toLowerCase())
              : item.name.common
                  .toLowerCase()
                  .includes(filterName.toLowerCase()) &&
                item.region === filterContinent
          )
          .map((item, id) => (
            <div
              className={`col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 `}
              key={id}
            >
              <div className={`card h-70 ${theme} `}>
                <img
                  src={item.flags.png}
                  className="card-img-top"
                  alt={item.flags.alt}
                />
                <div className="card-body">
                  <Link className="link" to={`/${item.name.common}`}>
                    <h5 className="card-title">{item.name.common}</h5>

                    <p className="card-text">Population: {item.population}</p>
                    <p className="card-text">Region: {item.region}</p>
                    <p className="card-text">Sub-Region: {item.subregion}</p>
                    <p className="card-text">Capital: {item.capital}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
