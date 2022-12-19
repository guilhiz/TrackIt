import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "../context";
import React from "react";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Today from "../pages/Today";
import Habits from "../pages/Habits";
import Historic from "../pages/Historic";

import GlobalStyle from "../styles/GlobalStyle";
import "reset-css";

export function RouteProvider() {
  const token = localStorage.getItem("token");
  const logged = token === undefined;

  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={logged ? <Login /> : <Navigate to="/hoje" replace />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
