import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import { LoginPage } from "./pages/authentication/LoginPage";
import RegistrationPage from "./pages/authentication/RegistrationPage";
import Dashboard from "./pages/user/DashboardPage";
import MarketPlace from "./pages/marketplace/MarketplacePage";
import InvestmentPage from "./pages/investment/investmentPage";
import InvestmentCreatePage from "./pages/investment/InvestmentCreatePage";
import InvestmentBrowsePage from "./pages/investment/InvestmentBrowsePage";
import Forum from "./pages/community/Forum";
import ContractSection from "./components/ContractSection";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/invest" element={<InvestmentPage />} />
        <Route path="/investcreate" element={<InvestmentCreatePage />} />
        <Route path="/investbrowse" element={<InvestmentBrowsePage />} />
        <Route path="/contract" element={<ContractSection />} />
      </Routes>
    </Router>
  );
};

export default App;