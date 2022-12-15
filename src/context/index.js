import React, { createContext, useState } from "react";
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{userData, setUserData}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider