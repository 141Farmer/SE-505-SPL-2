import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import CreateOffer from '../../components/investment/CreateOffer';
import OffersGrid from '../../components/investment/OffersGrid';
import Navbar from '../../components/Navbar/Navbar';


function InvestmentPage() {
  const [offers, setOffers] = useState([]);

  // Example initial offers
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
      poster: "Current User", // This would come from auth
      principle: parseFloat(newOffer.principle),
      duration: parseInt(newOffer.duration),
      profitRate: parseFloat(newOffer.profitRate),
      details: newOffer.details,
      negotiations: []
    };
    setOffers([offer, ...offers]);
  };

  const handleNegotiate = (offerId) => {
    const newNegotiation = {
      id: Date.now(),
      proposedPrinciple: 8000,
      proposedDuration: 10,
      proposedRate: 12,
      negotiator: "Jane Smith" // This would come from auth
    };
    
    setOffers(offers.map(offer => 
      offer.id === offerId 
        ? { ...offer, negotiations: [...offer.negotiations, newNegotiation] }
        : offer
    ));
  };

  return (
    
    <div className="max-w-4xl mx-auto p-4">

      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse">Browse Offers</TabsTrigger>
          <TabsTrigger value="create">Create Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <OffersGrid 
            offers={[...offers, ...activeOffers]} 
            onNegotiate={handleNegotiate}
          />
        </TabsContent>

        <TabsContent value="create">
          <CreateOffer onCreateOffer={handleCreateOffer} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default InvestmentPage;