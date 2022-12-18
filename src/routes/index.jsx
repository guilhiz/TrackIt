import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import AuthProvider from "../context";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Today from "../pages/Today";
import Habits from "../pages/Habits";

import GlobalStyle from "../styles/GlobalStyle";
import "reset-css";

export function RouteProvider() {
  // const { userData } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const logged = userData.token === undefined;
  console.log(userData.token);
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={logged ? <Login /> : <Navigate to="/hoje" replace />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Today />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
