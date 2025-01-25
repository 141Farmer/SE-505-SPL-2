import React from 'react';
import OfferCard from './OfferCard';

function OffersGrid({ offers, onNegotiate }) {
  return (
    <div className="space-y-4">
      {offers.map(offer => (
        <OfferCard 
          key={offer.id} 
          offer={offer} 
          onNegotiate={onNegotiate}
        />
      ))}
    </div>
  );
}

export default OffersGrid;