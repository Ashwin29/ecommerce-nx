import React from 'react';
import './OrderSummary.css';
import { Typography } from '../typography/Typography';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  tax,
  total,
}) => {
  return (
    <div className="orderSummary">
      <div className="row">
        <Typography variant="p">Subtotal:</Typography>
        <Typography variant="p">${subtotal.toFixed(2)}</Typography>
      </div>
      <div className="row">
        <Typography variant="p">Shipping:</Typography>
        <Typography variant="p">${shipping.toFixed(2)}</Typography>
      </div>
      <div className="row">
        <Typography variant="p">Tax:</Typography>
        <Typography variant="p">${tax.toFixed(2)}</Typography>
      </div>
      <div className="row">
        <Typography variant="h3">Total:</Typography>
        <Typography variant="h3">${total.toFixed(2)}</Typography>
      </div>
    </div>
  );
};
