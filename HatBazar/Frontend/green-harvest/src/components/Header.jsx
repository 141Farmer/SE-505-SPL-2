import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-green-700 text-white p-6 shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wider">Green Harvest</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xl">
          <li><Link to="/" className="hover:text-green-300 transition duration-300">Home</Link></li>
          <li><Link to="/ecommerce" className="hover:text-green-300 transition duration-300">Market</Link></li>
          <li><Link to="/investment" className="hover:text-green-300 transition duration-300">Investment</Link></li>
          <li><Link to="/forum" className="hover:text-green-300 transition duration-300">Community</Link></li>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-green-700 text-white flex flex-col space-y-6 p-6 text-2xl">
            <li><Link to="/" onClick={toggleMobileMenu} className="hover:text-green-300 transition duration-300">Home</Link></li>
            <li><Link to="/ecommerce" onClick={toggleMobileMenu} className="hover:text-green-300 transition duration-300">Market</Link></li>
            <li><Link to="/investment" onClick={toggleMobileMenu} className="hover:text-green-300 transition duration-300">Investment</Link></li>
            <li><Link to="/forum" onClick={toggleMobileMenu} className="hover:text-green-300 transition duration-300">Community</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
