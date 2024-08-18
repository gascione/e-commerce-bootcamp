import { createContext, useState } from "react";

export const UserSessionContext = createContext();
export const UserSessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("User is logged in");
  };
  return (
    <UserSessionContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </UserSessionContext.Provider>
  );
};
