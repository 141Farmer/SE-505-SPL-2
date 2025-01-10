import React from "react";
  
const StatItem = ({ icon: Icon, value, label }) => (
    <div>
      <div className="flex items-center justify-center gap-2 text-4xl font-bold mb-2">
        <Icon className="w-8 h-8" />
        {value}
      </div>
      <p className="text-green-100">{label}</p>
    </div>
  );

export default StatItem;