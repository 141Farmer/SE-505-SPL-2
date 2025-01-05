// App.js
import React  from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/authentication/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Auth routes */}
        
        
        
        {/* Add other routes here */}
        {/*<Route path="/consumer/*" element={<ConsumerRoutes />} />
        <Route path="/farm/*" element={<FarmRoutes />} />
        <Route path="/investor/*" element={<InvestorRoutes />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;