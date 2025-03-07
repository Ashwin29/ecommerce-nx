import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ThemeProvider } from '@ecommerce-nx/theme';
import { Navbar } from '@ecommerce-nx/ui-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <Navbar />
      <App />
    </ThemeProvider>
  </StrictMode>
);
