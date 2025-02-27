import React from 'react';
import './ProductGrid.css';

interface ProductGridProps {
  children: React.ReactNode;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};
