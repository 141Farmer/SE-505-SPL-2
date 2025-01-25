import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { DollarSign, Clock, Percent } from 'lucide-react';

function OfferCard({ offer, onNegotiate }) {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Investment Offer</h3>
            <p className="text-sm text-gray-500">Posted by: {offer.poster}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onNegotiate(offer.id)}>
              Negotiate
            </Button>
            <Button variant="default">Accept</Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <div>
              <p className="text-sm text-gray-500">Principle</p>
              <p className="font-bold">${offer.principle.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-bold">{offer.duration} months</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Percent className="h-4 w-4" />
            <div>
              <p className="text-sm text-gray-500">Profit Rate</p>
              <p className="font-bold">{offer.profitRate}%</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{offer.details}</p>

        {offer.negotiations?.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <h4 className="font-bold mb-2">Negotiations</h4>
            {offer.negotiations.map(neg => (
              <div key={neg.id} className="bg-gray-50 p-3 rounded mb-2">
                <p className="text-sm text-gray-500">Counter offer from {neg.negotiator}</p>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <p>Principle: ${neg.proposedPrinciple.toLocaleString()}</p>
                  <p>Duration: {neg.proposedDuration} months</p>
                  <p>Rate: {neg.proposedRate}%</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default OfferCard;