import React, { useState, useEffect } from "react";

export const DarkModeButton = () => {
  /* const [actualValue, changeTheValueFunction] = useState(initialValue) */
  const [darkMode, setDarkMode] = useState(false);
  const body = document.body;

  useEffect(() => {
    //This code will run when the component renders
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button className="darkMode__button" onClick={() => setDarkMode(!darkMode)}>
      On/Off
    </button>
  );
};
