import React from 'react';
import { Leaf, ChevronRight } from 'lucide-react';

const Hero = () => (
    <header className="bg-green-700 text-white pt-24 pb-16">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <Leaf className="w-16 h-16 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Agri Marketplace and Community
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Connect, Trade, and Grow with Fellow Agriculture Enthusiasts
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-100 transition-colors">
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );

export default Hero;
