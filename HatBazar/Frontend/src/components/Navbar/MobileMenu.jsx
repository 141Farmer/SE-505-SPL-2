import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, navItems, onClose }) => {
    if (!isOpen) return null;
    const navigate = useNavigate();
  
    return (
      <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-green-700 hover:text-green-900 font-medium py-2"
              onClick={onClose}
            >
              {item.name}
            </a>
          ))}
          <button 
            className="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    );
  };

export default MobileMenu;


