import React, { useState } from 'react';
import CreateOfferPage from '../../components/investment/CreateOfferPage';
import Navbar from '../../components/Navbar/Navbar';
import SubNavbar from '../../components/SubNavbar/SubNavbar';

function InvestmentCreatePage() {
  const [currentTab, setCurrentTab] = useState("create");
  const [offers, setOffers] = useState([]);
 

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
    setCurrentTab("create");
  };

  const renderContent = () => {
        return <CreateOfferPage onCreateOffer={handleCreateOffer} />;
      
    }

  return (
    <div className="bg-green-100 min-h-screen">
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

export default InvestmentCreatePage;