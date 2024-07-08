import "../styles/Navbar.css";
import React from "react";
import ThemeButton from "./ThemeButton";
import { useEffect } from "react";
const Navbar = () => {
  const theme = "";
  // const handleSetTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  //   console.log("done");
  // };
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${theme} `}>
        <div className="container-fluid ">
          <p className={`navbar-brand ${theme} `} >
            Where In The World?
          </p>
        </div>
        {/* <div>
          <ThemeButton onClick={handleSetTheme} theme={theme} />
        </div> */}
      </nav>
    </>
  );
};
export default Navbar;
