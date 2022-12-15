import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "../context";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Today from "../pages/Today";

import GlobalStyle from "../styles/GlobalStyle";
import "reset-css";

export function RouteProvider() {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider  >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Today />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Login />} />
        </Routes>
      </AuthProvider >
    </Router>
  );
}
