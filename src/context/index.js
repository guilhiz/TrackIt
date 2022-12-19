import React, { createContext, useState } from "react";
import { useStickyState } from "../hooks";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useStickyState({}, "userData");
  const [percentage, setPercentage] = useState(0);

  return (
    <AuthContext.Provider value={{ userData, setUserData, percentage, setPercentage }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
