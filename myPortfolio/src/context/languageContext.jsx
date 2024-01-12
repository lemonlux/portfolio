import React, { useEffect } from 'react';
import { createContext, useContext, useMemo, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
 
 const [language, setLanguage] = useState(() =>
    localStorage.getItem("language") ? localStorage.getItem("language") : "english"
  );

  // FUNCION MODO NOCHE - MODO DIA
  const toggleLanguage = () => {
    setLanguage((current) => {
      if (current == "english") {
        localStorage.setItem("language", "spanish");
        return "spanish";
      } else {
        localStorage.setItem("language", "english");
        return "english";
      }
    });
  };

  // Renderizar y añadir la clase al body cada vez que el theme cambie
  useEffect(() => {
    if (language === "english") {
      document.body.className = "english";
    }

    document.body.className = localStorage.getItem("language");
  }, [language]);


  const value = useMemo(
    () => ({
        language, setLanguage, toggleLanguage
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
