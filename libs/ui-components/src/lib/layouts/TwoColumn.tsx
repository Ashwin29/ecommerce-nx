import React from 'react';

interface TwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const TwoColumn: React.FC<TwoColumnProps> = ({ left, right }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};
