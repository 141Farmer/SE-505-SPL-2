import React from 'react';
import { useNavigate } from 'react-router-dom';

const DesktopMenu = ({ navItems }) => {
  const navigate = useNavigate();

  return  (
  <div className="hidden md:flex items-center gap-6">
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="text-green-700 hover:text-green-900 font-medium transition-colors"
      >
        {item.name}
      </a>
    ))}
    <button 
      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
      onClick={() => navigate('/login')}
    >
      Login
    </button>
  </div>
  );
};
export default DesktopMenu;