import React from "react";
import "../styles/ThemeButton.css";

const ThemeButton = ({ onClick, theme }) => {
  return (
    <div className="theme-button-container">
      <button className={`theme-button ${theme}`} onClick={onClick}>
        <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
        {theme === "light" ? " Dark Mode" : " Light Mode"}
      </button>
    </div>
  );
};

export default ThemeButton;
