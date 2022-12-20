import React, { createContext, useState } from "react";
import { api } from "../services";
import { useStickyState } from "../hooks";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../constants";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useStickyState({}, "userData");
  const [percentage, setPercentage] = useState(0);
  const [theme, setTheme] = useState(false);
  console.log(theme)

  const calcPercentage = () => {
    const config = {
      headers: { Authorization: `Bearer ${userData.token}` },
    };
    const promise = api.get("/habits/today", config);
    promise.then((res) => {
      const data = res.data;
      const habitsDone = data.filter((t) => t.done);
      const percentageHabitsCompleted = (habitsDone.length / data.length) * 100;
      setPercentage(percentageHabitsCompleted.toFixed());
    });
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <AuthContext.Provider value={{ userData, setUserData, percentage, setPercentage, calcPercentage, setTheme, theme }}>
        {children}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default AuthProvider;
