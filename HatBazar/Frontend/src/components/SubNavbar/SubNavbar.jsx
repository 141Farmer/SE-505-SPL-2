import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Search, PlusCircle, Menu, X } from 'lucide-react';

const SubNavbar = ({ currentTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const subNavItems = [
    { name: 'Browse Offers', value: 'browse', icon: Search, path: '/investbrowse' },
    { name: 'Create Offer', value: 'create', icon: PlusCircle, path: '/investcreate' },
  ];

  const handleNavigation = (item) => {
    onTabChange(item.value); // Update tab state
    navigate(item.path); // Navigate to the page
  };

  const DesktopSubMenu = () => (
    <div className="hidden md:flex items-center space-x-6">
      {subNavItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.value}
            onClick={() => handleNavigation(item)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              currentTab === item.value
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-green-50'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );

  const MobileSubMenu = () => (
    <div className="md:hidden">
      <div className="px-4 py-2 space-y-2">
        {subNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.value}
              onClick={() => {
                handleNavigation(item);
                setIsMobileMenuOpen(false); // Close the menu after navigation
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                currentTab === item.value
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:bg-green-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-green-800">Investment Options</span>
        </div>

        {/* Desktop Menu */}
        <DesktopSubMenu />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-green-700 hover:text-green-900"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileSubMenu />}
    </nav>
  );
};

export default SubNavbar;
