import React from 'react';
import './CartSummary.css';
import { Typography } from '@ecommerce-nx/ui-components';

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
  return (
    <div className="cartSummary">
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
      <div className="summaryRow">
        <Typography variant="h3">Total:</Typography>
        <Typography variant="h3">${total.toFixed(2)}</Typography>
      </div>
    </div>
  );
};
