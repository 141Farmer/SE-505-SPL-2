import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8"> {/* Adjust the top margin to avoid overlap with the fixed header */}
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-green-800 mb-4">Welcome to Green Harvest</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Empowering organic farmers and fostering a community for sustainable agriculture.
          Discover, invest, and connect with the future of organic farming.
        </p>
        <Link to="/ecommerce" className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* E-commerce Section */}
        <div className="border rounded-lg p-6 bg-white shadow-lg text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">E-commerce Marketplace</h2>
          <p className="text-gray-600 mb-6">
            Discover and purchase fresh organic products directly from farmers.
          </p>
          <Link to="/ecommerce" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            Explore Products
          </Link>
        </div>

        {/* Investment Section */}
        <div className="border rounded-lg p-6 bg-white shadow-lg text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Investment Opportunities</h2>
          <p className="text-gray-600 mb-6">
            Support farmers by investing in sustainable projects with high potential returns.
          </p>
          <Link to="/investment" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            View Investments
          </Link>
        </div>

        {/* Community Forum Section */}
        <div className="border rounded-lg p-6 bg-white shadow-lg text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Community Forum</h2>
          <p className="text-gray-600 mb-6">
            Join discussions with agricultural experts and experienced farmers to share insights.
          </p>
          <Link to="/forum" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            Join the Forum
          </Link>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-green-800 mb-4">Ready to Make an Impact?</h3>
        <p className="text-gray-700 mb-8">
          Green Harvest brings together a community dedicated to sustainable agriculture and organic growth. Be part of the change.
        </p>
        <Link to="/investment" className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition">
          Start Investing Today
        </Link>
      </section>

    </div>
  );
}

export default Home;
