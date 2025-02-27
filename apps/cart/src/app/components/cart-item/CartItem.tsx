'use client';

import React from 'react';
import { Button, Typography } from '@ecommerce-nx/ui-components';
import './CartItem.css';

interface CartItemProps {
  productImage: string;
  productName: string;
  price: number;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (newQuantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  productImage,
  productName,
  price,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} className="productImage" />
      <div className="itemDetails">
        <Typography variant="h3">{productName}</Typography>
        <Typography variant="p">${price.toFixed(2)}</Typography>
        <div className="quantityControl">
          <Button
            onClick={() => onQuantityChange(quantity - 1)}
            variant="secondary"
            disabled={quantity <= 1}
          >
            -
          </Button>
          <Typography variant="p">{quantity}</Typography>
          <Button
            onClick={() => onQuantityChange(quantity + 1)}
            variant="secondary"
          >
            +
          </Button>
        </div>
        <Button onClick={onRemove} variant="secondary">
          Remove
        </Button>
      </div>
    </div>
  );
};
