import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-green-900 text-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        
        {/* Social Media Links */}
        {/* <div className="flex justify-center space-x-4 mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">Facebook</a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">Twitter</a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">Instagram</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">LinkedIn</a>
        </div> */}
        
        {/* Copyright */}
        <p>&copy; 2024 Green Harvest | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;