import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

import "reset-css";
import GlobalStyle from "../styles/GlobalStyle";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<Login />} />
        <Route path="/hoje" element={<Login />} />
        <Route path="/historico" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
