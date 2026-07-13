import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
   
    const themeUser = localStorage.getItem('theme')
    
    if (themeUser) setIsDark(JSON.parse(themeUser))

  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDark)

  }, [isDark])

  const theme = {
    bg: isDark ? "bg-[#2f3e46]" : "bg-[#F4F7F5]",
    button: "bg-[#176579]",
    buttonModal: "bg-[#1985A1]",
    bgCard: isDark ? "bg-[#2f3e46]/30" : "bg-[#F4F7F5]/30",
    bgHeader: isDark ? "bg-[#2A3840]" : "bg-white",
    text: isDark ? "text-white" : "text-black",
    border: isDark ? "border-white/30" : "border-black/30"
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
