'use client';

import React from 'react';
import { Button, Typography } from '@ecommerce-nx/ui-components';
import './CartItem.css';
import { useTheme } from '@ecommerce-nx/theme';

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
  const { theme } = useTheme();

  return (
    <div className={`cartItem ${theme}`} role="listitem">
      <img
        src={productImage}
        alt={`Image of ${productName}`}
        className="productImage"
      />
      <div className="itemDetails">
        <Typography variant="h3" className="productName">
          {productName}
        </Typography>
        <Typography variant="p" className="productPrice">
          ${price.toFixed(2)}
        </Typography>
        <div className="quantityControl">
          <Button
            onClick={() => onQuantityChange(quantity - 1)}
            variant="secondary"
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="quantityBtn"
          >
            -
          </Button>
          <Typography variant="p" className="quantity" aria-live="polite">
            {quantity}
          </Typography>
          <Button
            onClick={() => onQuantityChange(quantity + 1)}
            variant="secondary"
            aria-label="Increase quantity"
            className="quantityBtn"
          >
            +
          </Button>
        </div>
        <Button
          onClick={onRemove}
          variant="secondary"
          className="removeButton"
          aria-label={`Remove ${productName} from cart`}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
