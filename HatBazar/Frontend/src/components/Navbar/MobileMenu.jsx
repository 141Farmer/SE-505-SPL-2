import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, navItems, onClose }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path} // Use 'to' instead of 'href'
            className={({ isActive }) =>
              `block text-green-700 hover:text-green-900 font-medium py-2 ${
                isActive ? 'font-bold' : ''
              }`
            }
            onClick={onClose} // Close the menu on click
          >
            {item.name}
          </NavLink>
        ))}
        <button
          className="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
          onClick={() => {
            onClose(); // Close the menu
            navigate('/login'); // Navigate to login
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;