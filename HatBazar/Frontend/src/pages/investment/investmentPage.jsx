import React, { useState } from 'react';
import BrowseOffers from '../../components/investment/BrowseOffers';
import CreateOfferPage from '../../components/investment/CreateOfferPage';
import Navbar from '../../components/Navbar/Navbar';
import SubNavbar from '../../components/SubNavbar/SubNavbar';

function InvestmentPage() {
  const [currentTab, setCurrentTab] = useState("browse");
  const [offers, setOffers] = useState([]);
 
  const [activeOffers] = useState([
    {
      id: 1,
      poster: "John Doe",
      principle: 10000,
      duration: 12,
      profitRate: 15,
      details: "Looking for investment in tech startup",
      negotiations: []
    }
  ]);

  const handleCreateOffer = (newOffer) => {
    const offer = {
      id: Date.now(),
      poster: "Current User",
      principle: parseFloat(newOffer.principle),
      duration: parseInt(newOffer.duration),
      profitRate: parseFloat(newOffer.profitRate),
      details: newOffer.details,
      negotiations: []
    };
    setOffers([offer, ...offers]);
    setCurrentTab("browse");
  };

  const handleNegotiate = (offerId) => {
    const newNegotiation = {
      id: Date.now(),
      proposedPrinciple: 8000,
      proposedDuration: 10,
      proposedRate: 12,
      negotiator: "Jane Smith"
    };
   
    setOffers(offers.map(offer =>
      offer.id === offerId
        ? { ...offer, negotiations: [...offer.negotiations, newNegotiation] }
        : offer
    ));
  };

  const renderContent = () => {
    switch (currentTab) {
      case "browse":
        return (
          <BrowseOffers
            offers={offers}
            activeOffers={activeOffers}
            onNegotiate={handleNegotiate}
          />
        );
      case "create":
        return <CreateOfferPage onCreateOffer={handleCreateOffer} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Fixed main navbar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* SubNavbar below main navbar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white shadow-sm">
        <SubNavbar currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>
      
      {/* Main content with proper spacing */}
      <div className="pt-32 px-4">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );

}

export default InvestmentPage;