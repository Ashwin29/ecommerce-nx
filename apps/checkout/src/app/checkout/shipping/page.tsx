'use client';

import { Button, FormField, Typography } from '@ecommerce-nx/ui-components';
import { useState } from 'react';

export default function ShippingPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h1">Shipping Information</Typography>
      <form>
        <FormField label="Full Name">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>
        <FormField label="Address">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormField>
        <Button
          onClick={() => console.log('Proceed to Payment')}
          variant="primary"
        >
          Continue to Payment
        </Button>
      </form>
    </div>
  );
}
