import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Today from "../pages/Today";

import "reset-css";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData}/>} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<Login />} />
        <Route path="/hoje" element={<Today userData={userData} />} />
        <Route path="/historico" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
