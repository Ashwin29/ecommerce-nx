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
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null); // Prevent SSR hydration issues

  // Set theme on mount & listen for changes
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | null;
    const initialTheme = storedTheme || 'light';
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  // Function to apply theme styles dynamically
  const applyTheme = (theme: 'light' | 'dark') => {
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
  };

  // Toggle function
  const toggleTheme = () => {
    if (!theme) return; // Prevent toggling before mount
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!theme) return null; // Prevent rendering before hydration completes

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
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
