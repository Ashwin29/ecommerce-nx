import CheckoutLayout from '../components/layout/checkout/CheckoutLayout';

export default function Checkout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <CheckoutLayout children={children} />
    </div>
  );
}
