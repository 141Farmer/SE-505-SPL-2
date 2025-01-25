import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SubNavbar from '../../components/SubNavbar/SubNavbar';
import HandleNegotiate from '../../components/investment/HandleNegotiate';

function InvestmentBrowsePage() {
  // State for the current tab
  const [currentTab, setCurrentTab] = useState('browse');

  // Example active offers
  const [activeOffers, setActiveOffers] = useState([
    {
      id: 1,
      poster: "John Doe",
      principle: 10000,
      duration: 12,
      profitRate: 15,
      details: "Looking for investment in a tech startup.",
      date: "22/01/2025",
      negotiations: []
    },
    {
      id: 2,
      poster: "Jane Smith",
      principle: 15000,
      duration: 24,
      profitRate: 12,
      details: "Expanding an agricultural project.",
      date: "12/01/2025",
      negotiations: []
    },
    {
      id: 3,
      poster: "Kamrul",
      principle: 1500000000,
      duration: 60,
      profitRate: 1,
      details: "Expanding an agricultural project.",
      date: "01/01/2025",
      negotiations: []
    },
    {
      id: 4,
      poster: "Kibria",
      principle: 200,
      duration: 1,
      profitRate: 20,
      details: "Expanding an agricultural project.",
      date: "01/02/2025",
      negotiations: []
    },
  ]);

  // Handle negotiations
  const [negotiationInputs, setNegotiationInputs] = useState({});

  const handleInputChange = (offerId, field, value) => {
    setNegotiationInputs((prevInputs) => ({
      ...prevInputs,
      [offerId]: {
        ...prevInputs[offerId],
        [field]: value
      }
    }));
  };

  const renderOffers = () => (
    <div>
      {activeOffers.map((offer) => (
        <div
          key={offer.id}
          className="p-4 mb-4 border rounded-lg bg-white shadow-sm"
        >
          <h2 className="text-lg font-semibold">{offer.poster}</h2>
          <p>Principle: ${offer.principle}</p>
          <p>Duration: {offer.duration} months</p>
          <p>Profit Rate: {offer.profitRate}%</p>
          <p>Details: {offer.details}</p>

          {/* Negotiation Form */}
          <div className="mt-4 space-y-2">
            <input
              type="number"
              placeholder="Proposed Principle"
              value={negotiationInputs[offer.id]?.proposedPrinciple || ""}
              onChange={(e) =>
                handleInputChange(offer.id, "proposedPrinciple", e.target.value)
              }
              className="border p-2 w-full rounded-md"
            />
            <input
              type="number"
              placeholder="Proposed Duration (months)"
              value={negotiationInputs[offer.id]?.proposedDuration || ""}
              onChange={(e) =>
                handleInputChange(offer.id, "proposedDuration", e.target.value)
              }
              className="border p-2 w-full rounded-md"
            />
            <input
              type="number"
              placeholder="Proposed Rate (%)"
              value={negotiationInputs[offer.id]?.proposedRate || ""}
              onChange={(e) =>
                handleInputChange(offer.id, "proposedRate", e.target.value)
              }
              className="border p-2 w-full rounded-md"
            />
            <button
              onClick={() =>
                HandleNegotiate(offer.id, negotiationInputs, setActiveOffers, setNegotiationInputs)
              }
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Negotiate
            </button>
          </div>

          {/* Negotiations */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Negotiations:</h3>
            {offer.negotiations.length > 0 ? (
              offer.negotiations.map((negotiation) => (
                <div
                  key={negotiation.id}
                  className="text-sm text-gray-600 border-t mt-2 pt-2"
                >
                  <strong>{negotiation.negotiator}:</strong> Proposed Principle: ${negotiation.proposedPrinciple}, Duration: {negotiation.proposedDuration} months, Rate: {negotiation.proposedRate}%
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">No negotiations yet.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-green-100 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="fixed top-16 left-0 right-0 z-40 bg-white shadow-sm">
        <SubNavbar currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          {currentTab === 'browse' && renderOffers()}
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
}

export default InvestmentBrowsePage;
