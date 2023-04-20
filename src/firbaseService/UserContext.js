import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./Auth";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [curentUser, setCurentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user
        ? setCurentUser({ ...user, gender: "null" })
        : setCurentUser({ gender: "null" });
    });
  }, []);
  return (
    <UserContext.Provider value={{ curentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(UserContext);
