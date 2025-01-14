import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/DashboardPage";
import MarketPlace from "./pages/MarketplacePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<MarketPlace />} />
      </Routes>
    </Router>
  );
};

export default App;