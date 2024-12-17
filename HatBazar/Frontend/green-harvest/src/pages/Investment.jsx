import React, { useState } from 'react';
import InvestmentCard from '../components/InvestmentCard';

function Investment() {
  const [investments] = useState([
    { id: 1, title: 'Farm A', turnover: '50,000', profitShare: 10 },
    // Add more investments here
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">Investment Opportunities</h1>
      <div className="grid grid-cols-1 gap-4">
        {investments.map(investment => <InvestmentCard key={investment.id} investment={investment} />)}
      </div>
    </div>
  );
}

export default Investment;
