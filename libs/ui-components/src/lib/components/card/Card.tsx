import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  children,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
};
