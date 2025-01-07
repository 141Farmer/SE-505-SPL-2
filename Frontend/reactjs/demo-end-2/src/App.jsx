import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ecommerce from './pages/Ecommerce';
// import ProductDetail from './pages/ProductDetail';
import Investment from './pages/Investment';
import Forum from './pages/Forum';

function App() {
  return (
    <Router>
      {/* Main container with flex column to manage header, content, and footer */}
      <div className="flex flex-col min-h-screen">
        {/* Header section */}
        <Header />
        
        {/* Main content with flex-grow to push the footer down when content is short */}
        <main className="mt-20 p-4 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            {/* <Route path="/ecommerce/:id" element={<ProductDetail products={products} />} /> */}
            <Route path="/investment" element={<Investment />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
        
        {/* Footer section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;