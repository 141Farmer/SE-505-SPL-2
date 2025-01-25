import React from 'react';

// Main Card Component
export function Card({ children, className = '', ...props }) {
  return (
    <div className={`border rounded-lg shadow-sm p-4 bg-white ${className}`} {...props}>
      {children}
    </div>
  );
}

// Card Header
export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`border-b pb-2 mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Card Title
export function CardTitle({ children, className = '', ...props }) {
  return (
    <h2 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
}

// Card Content
export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
