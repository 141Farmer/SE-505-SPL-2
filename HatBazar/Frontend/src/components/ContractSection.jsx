import React from "react";
import Navbar from "./Navbar/Navbar";

const ContractSection = () => (
    <section id="contract" className="mt-16 bg-green-100 rounded-xl p-8">
      <Navbar/>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Agricultural Contracts</h2>
        <p className="text-green-700 max-w-2xl mx-auto mb-6">
          Streamline your agricultural business with secure, transparent contracts. 
          Connect with reliable partners and establish clear terms of engagement.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-colors">
          Explore Contracts
        </button>
      </div>
    </section>
  );

export default ContractSection;