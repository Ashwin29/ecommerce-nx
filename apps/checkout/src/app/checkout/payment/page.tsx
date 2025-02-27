'use client';

import {
  Button,
  FormField,
  PaymentMethodSelector,
  Typography,
} from '@ecommerce-nx/ui-components';
import { useState } from 'react';

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h1">Payment Information</Typography>
      <form>
        <PaymentMethodSelector
          options={['Credit Card', 'PayPal']}
          selected={paymentMethod}
          onChange={setPaymentMethod}
        />
        {paymentMethod === 'Credit Card' && (
          <FormField label="Card Number">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </FormField>
        )}
        <Button
          onClick={() => console.log('Proceed to Review')}
          variant="primary"
        >
          Continue to Review
        </Button>
      </form>
    </div>
  );
}
