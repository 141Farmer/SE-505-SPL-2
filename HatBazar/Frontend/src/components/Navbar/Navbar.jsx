import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Forum from '../../pages/community/Forum.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Market', href: '#market' },
    { name: 'Invest', href: '#invest' },
    { name: 'Community', href: '#Forum' },
    { name: 'Contract', href: '#contract' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-green-700" />
          <span className="text-2xl font-bold text-green-800">Green Harvest</span>
        </div>

        {/* Desktop Menu */}
        <DesktopMenu navItems={navItems} />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-green-700 hover:text-green-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} onClose={toggleMenu} />
    </nav>
  );
};

export default Navbar;
