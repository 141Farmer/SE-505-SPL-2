import React from 'react';
import CreateOffer from '../../components/investment/CreateOffer';

const CreateOfferPage = ({ onCreateOffer }) => {
  return (
    <div className="w-full">
      <CreateOffer onCreateOffer={onCreateOffer} />
    </div>
  );
};

export default CreateOfferPage;