import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const DesktopMenu = ({ navItems }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path} // Use 'to' instead of 'href'
          className={({ isActive }) =>
            isActive
              ? 'text-green-700 font-bold'
              : 'text-gray-600 hover:text-green-700 transition-colors'
          }
        >
          {item.name}
        </NavLink>
      ))}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
        onClick={() => navigate('/login')} // Navigate to login on click
      >
        Login
      </button>
    </div>
  );
};

export default DesktopMenu;