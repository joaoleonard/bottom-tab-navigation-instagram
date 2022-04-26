import { createContext, useState } from "react";;

export const ModeContext = createContext({
  darkMode: false,
  changeMode: () => {},
});

function ModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function changeMode() {
    setDarkMode(!darkMode);
  }

  const value = {
    darkMode,
    changeMode,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export default ModeContextProvider;
