'use client';
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme

  useEffect(() => {
    // Apply the initial theme
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

