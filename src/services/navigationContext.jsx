import React, { createContext, useState, useContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("login");
  const [username, setUsername] = useState("");

  const navigateTo = (page, user = null) => {
    setCurrentPage(page);
    if (user) setUsername(user.name);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, username, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};
