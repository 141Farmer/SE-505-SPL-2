import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function CreateOffer({ onCreateOffer }) {
  const [newOffer, setNewOffer] = React.useState({
    principle: '',
    duration: '',
    profitRate: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateOffer(newOffer);
    setNewOffer({ principle: '', duration: '', profitRate: '', details: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Investment Offer</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Principle Amount ($)</label>
            <Input
              type="number"
              value={newOffer.principle}
              onChange={(e) => setNewOffer({...newOffer, principle: e.target.value})}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Duration (months)</label>
            <Input
              type="number"
              value={newOffer.duration}
              onChange={(e) => setNewOffer({...newOffer, duration: e.target.value})}
              placeholder="Enter duration in months"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Profit Rate (%)</label>
            <Input
              type="number"
              value={newOffer.profitRate}
              onChange={(e) => setNewOffer({...newOffer, profitRate: e.target.value})}
              placeholder="Enter profit rate"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Details</label>
            <Input
              value={newOffer.details}
              onChange={(e) => setNewOffer({...newOffer, details: e.target.value})}
              placeholder="Enter offer details"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Post Offer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateOffer;