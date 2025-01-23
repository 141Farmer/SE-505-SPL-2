import React from "react";


const HandleNegotiate = (offerId, negotiationInputs, setActiveOffers, setNegotiationInputs) => {
          const { proposedPrinciple, proposedDuration, proposedRate } =
            negotiationInputs[offerId] || {};
        
          if (!proposedPrinciple || !proposedDuration || !proposedRate) {
            alert("Please fill out all fields for negotiation.");
            return;
          }
        
          const newNegotiation = {
            id: Date.now(),
            proposedPrinciple: parseFloat(proposedPrinciple),
            proposedDuration: parseInt(proposedDuration),
            proposedRate: parseFloat(proposedRate),
            negotiator: "Current User" // Replace with authenticated user
          };
        
          setActiveOffers((prevOffers) =>
            prevOffers.map((offer) =>
              offer.id === offerId
                ? { ...offer, negotiations: [...offer.negotiations, newNegotiation] }
                : offer
            )
          );
        
          // Clear inputs for the specific offer
          setNegotiationInputs((prevInputs) => ({
            ...prevInputs,
            [offerId]: {}
          }));
};
export default HandleNegotiate;
        