// Uncomment this line to use CSS modules
// import styles from './app.module.css';
'use client';

import { redirect } from 'next/navigation';

export default function App() {
  redirect('/checkout/shipping');
}
