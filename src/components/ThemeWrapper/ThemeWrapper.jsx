import React, { useState, useEffect } from 'react';
import { createContext } from "react";
import styles from "../ThemeToggler/styles.module.css";

export const themes = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});

export function ThemeWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.className = 'themeLight';
        document.getElementById('btn_sun').classList.remove(styles.button__icon_disabled)
        document.getElementById('btn_moon').classList.add(styles.button__icon_disabled)
        break;
      case themes.dark:
        document.body.className = 'themeDark';
        document.getElementById('btn_moon').classList.remove(styles.button__icon_disabled)
        document.getElementById('btn_sun').classList.add(styles.button__icon_disabled)
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}