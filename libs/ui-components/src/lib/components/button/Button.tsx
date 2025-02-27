import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant}`}
    >
      {children}
    </button>
  );
};
