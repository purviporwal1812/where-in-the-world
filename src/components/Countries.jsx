import { useEffect, useState } from "react";
import "../styles/Countries.css";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Countries = ({ filterName, filterContinent }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Only requesting the fields we actually use:
    //   name, population, region, subregion, capital, flags
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags"
    )
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Ensure we got an array back
        setCountries(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Failed to load countries:", error);
        setCountries([]); // fallback
      });
  }, []);

  // Simple loading state
  if (countries.length === 0) {
    return <p>Loading countries…</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {countries
          .filter((item) => {
            const matchesName = item.name.common
              .toLowerCase()
              .includes(filterName.toLowerCase());
            if (filterContinent === "All") {
              return matchesName;
            }
            return matchesName && item.region === filterContinent;
          })
          .map((item, idx) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
              key={idx}
            >
              <div className="card h-70">
                <img
                  src={item.flags.png}
                  className="card-img-top"
                  alt={item.flags.alt || `${item.name.common} flag`}
                />
                <div className="card-body">
                  <Link className="link" to={`/${item.name.common}`}>
                    <h5 className="card-title">{item.name.common}</h5>
                    <p className="card-text">
                      Population: {item.population.toLocaleString()}
                    </p>
                    <p className="card-text">Region: {item.region}</p>
                    <p className="card-text">Sub-Region: {item.subregion}</p>
                    <p className="card-text">Capital: {item.capital?.[0]}</p>
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
