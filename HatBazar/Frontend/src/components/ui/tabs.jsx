import React, { useState } from 'react';

// Tabs component (main container)
export function Tabs({ children, defaultValue, className = '', ...props }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`tabs ${className}`} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

// TabsList component (tab triggers container)
export function TabsList({ children, className = '', ...props }) {
  return (
    <div className={`tabs-list flex ${className}`} {...props}>
      {children}
    </div>
  );
}

// TabsTrigger component (individual tab trigger)
export function TabsTrigger({ children, value, activeTab, setActiveTab, className = '', ...props }) {
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`tabs-trigger px-4 py-2 border-b-2 ${
        isActive ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-600'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// TabsContent component (content for each tab)
export function TabsContent({ children, value, activeTab, className = '', ...props }) {
  if (activeTab !== value) return null;

  return (
    <div className={`tabs-content mt-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
