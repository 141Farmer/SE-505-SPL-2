import React from 'react';

function InvestmentCard({ investment }) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold">{investment.title}</h2>
      <p>Turnover: ${investment.turnover}</p>
      <p>Profit Sharing: {investment.profitShare}%</p>
      <button className="bg-green-700 text-white px-4 py-2 mt-2 rounded">Express Interest</button>
    </div>
  );
}

export default InvestmentCard;