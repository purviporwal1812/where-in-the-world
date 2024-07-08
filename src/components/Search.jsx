import { useContext } from "react";

const Search = ({ name, setName }) => {
  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <label className={`me-2 `}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        value={name}
        onChange={handleName}
        className={`form-control `}
        placeholder="Search"
        type="text"
        style={{ maxWidth: "200px" }}
      />
    </>
  );
};

export default Search;
