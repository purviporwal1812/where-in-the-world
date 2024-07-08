import Countries from "./Countries";
import Search from "./Search";
import "../styles/Navbar.css";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const continents = ["Asia", "Africa", "Europe", "Americas", "Oceania", "All"];

  let conArr = [];
  continents.forEach((continent) => {
    const handleContinent = () => {
      setSelectedContinent(continent);
    };
    conArr.push(
      <li key={continent} onClick={handleContinent} className="dropdown-item">
        {continent}
      </li>
    );
  });

  return (
    <>
      <div className={`container  `}>
        <div className="row align-items-center mb-3">
          <div className="col-md-6 d-flex align-items-center">
            <Search name={name} setName={setName} />
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedContinent}
              </a>
              <ul className={`dropdown-menu dropdown-menu-end $`}>{conArr}</ul>
            </div>
          </div>
        </div>
      </div>
      <Countries filterName={name} filterContinent={selectedContinent} />
    </>
  );
};

export default Home;
