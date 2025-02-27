'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { colors } from '../colors';
import { typography } from '../typography';

interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as 'light' | 'dark')
      : 'light'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');

      // Apply colors
      Object.entries(colors[theme]).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value as string);
      });

      // Apply typography
      Object.entries(typography.fonts).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--font-${key}`, value);
      });

      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
