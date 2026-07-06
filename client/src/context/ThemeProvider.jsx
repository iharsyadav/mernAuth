import { createContext, useEffect, useState } from "react";

import { STORAGE_KEYS } from "@/shared/constants/storageKeys";
import { storage } from "@/shared/utils/storage";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    storage.get(STORAGE_KEYS.MODE) || "light"
  );

  const [colorTheme, setColorTheme] = useState(
    storage.get(STORAGE_KEYS.COLOR_THEME) || "theme-default"
  );

  useEffect(() => {
    const root = document.documentElement;

    // Dark Mode
    root.classList.toggle("dark", mode === "dark");

    // Remove previous theme
    root.classList.remove(
      "theme-default",
      "theme-purple",
      "theme-green",
      "theme-blue"
    );

    // Apply current theme
    root.classList.add(colorTheme);

    // Save preferences
    storage.set(STORAGE_KEYS.MODE, mode);
    storage.set(STORAGE_KEYS.COLOR_THEME, colorTheme);
  }, [mode, colorTheme]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        colorTheme,
        setColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}