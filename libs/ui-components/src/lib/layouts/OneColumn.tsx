import React from 'react';

interface OneColumnProps {
  children: React.ReactNode;
}

export const OneColumn: React.FC<OneColumnProps> = ({ children }) => {
  return <div className="max-w-3xl mx-auto p-4">{children}</div>;
};
