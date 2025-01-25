import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const MobileMenu = ({ isOpen, navItems, onClose }) => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  if (!isOpen) return null;

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
        {isLoggedIn ? (
          <button
            className="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            onClick={() => navigate('/dashboard')} 
          >
            <User className="h-5 w-5" />
            Profile
          </button>

        ) : (
          <button
            className="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;