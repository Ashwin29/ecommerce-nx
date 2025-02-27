'use client';

import React from 'react';
import './PaymentSelector.css';
import { Typography } from '../typography/Typography';

interface PaymentMethodSelectorProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="selector">
      {options.map((option) => (
        <label key={option} className="option">
          <input
            type="radio"
            name="paymentMethod"
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
          />
          <Typography variant="p">{option}</Typography>
        </label>
      ))}
    </div>
  );
};
