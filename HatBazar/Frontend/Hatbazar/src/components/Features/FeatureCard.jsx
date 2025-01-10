import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-green-700" />
    </div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-green-600" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureCard;