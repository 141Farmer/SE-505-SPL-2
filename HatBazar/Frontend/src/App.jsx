import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/authentication/LoginPage";
import RegistrationPage from "./pages/authentication/RegistrationPage";
import LandingPage from "./pages/home/LandingPage";
import Dashboard from "./pages/user/DashboardPage";
import Forum from "./pages/community/Forum";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;