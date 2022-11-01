import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

const Context = createContext();

export default function ContextProvider({ children }) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "light" : "dark"
  );

  const value = {
    theme,
    setTheme,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context };
