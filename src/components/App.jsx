import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import "reset-css";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Home />} />
        <Route path="/habitos" element={<Home />} />
        <Route path="/hoje" element={<Home />} />
        <Route path="/historico" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
