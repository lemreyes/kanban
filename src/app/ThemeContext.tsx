"use client";
import React, { createContext, useContext, useState } from "react";

// Define the types for the context
type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the context
export function useKanbanTheme() {
  const context = useContext(ThemeContext);
  console.log("Context: ", context);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Define the props for ThemeProvider
type ThemeProviderProps = {
  children: React.ReactNode;
};

// Create a provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
