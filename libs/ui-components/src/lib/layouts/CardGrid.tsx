import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
}

export const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
};
