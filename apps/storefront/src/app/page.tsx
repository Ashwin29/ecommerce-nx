'use client';

import { useTheme } from '@ecommerce-nx/theme';
import {
  Button,
  Card,
  ProductGrid,
  Typography,
} from '@ecommerce-nx/ui-components';

export default function Index() {
  const { theme, setTheme } = useTheme();

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text)',
      }}
    >
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>

      <div className="p-6">
        <Typography variant="h1">Welcome to Our Store</Typography>
        <Typography variant="blockquote">
          {'This is an amazing shopping experience!'}
        </Typography>
        <Typography variant="caption">
          Limited-time offer, while supplies last.
        </Typography>
        <Typography variant="small">Terms and conditions apply.</Typography>

        <Button onClick={() => alert('Shop Now')} variant="primary">
          Shop Now
        </Button>

        <ProductGrid>
          <Card
            title="Product 1"
            description="Best-selling item"
            imageUrl="https://picsum.photos/200/300"
          >
            <Button onClick={() => alert('Added to Cart')} variant="secondary">
              Add to Cart
            </Button>
          </Card>
          <Card
            title="Product 2"
            description="Limited-time offer"
            imageUrl="https://picsum.photos/200/300"
          >
            <Button onClick={() => alert('Added to Cart')} variant="secondary">
              Add to Cart
            </Button>
          </Card>
        </ProductGrid>
      </div>
    </div>
  );
}
