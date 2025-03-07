'use client';

import React from 'react';
import './CartSummary.css';
import { Typography, Button } from '@ecommerce-nx/ui-components';
import { useTheme } from '@ecommerce-nx/theme';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping,
  tax,
  total,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`cartSummary ${theme}`}
      role="region"
      aria-labelledby="cart-summary-heading"
    >
      <Typography variant="h3" className="summaryTitle">
        Order Summary
      </Typography>

      <div className="summaryRow">
        <Typography variant="p">Subtotal:</Typography>
        <Typography variant="p">${subtotal.toFixed(2)}</Typography>
      </div>
      <div className="summaryRow">
        <Typography variant="p">Shipping:</Typography>
        <Typography variant="p">${shipping.toFixed(2)}</Typography>
      </div>
      <div className="summaryRow">
        <Typography variant="p">Tax:</Typography>
        <Typography variant="p">${tax.toFixed(2)}</Typography>
      </div>
      <div className="summaryRow totalRow">
        <Typography variant="h3">Total:</Typography>
        <Typography variant="h3">${total.toFixed(2)}</Typography>
      </div>

      <Button
        onClick={() => {
          window.location.href = 'http://localhost:4300';
        }}
        variant="primary"
        className="checkoutButton"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
