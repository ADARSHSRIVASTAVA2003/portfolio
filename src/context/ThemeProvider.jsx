import { useState, useEffect } from 'react';
import { ThemeContext } from './useTheme';

const lightTheme = {
  '--text': '#6b6375',
  '--text-h': '#08060d',
  '--bg': '#ffffff',
  '--border': 'transparent',
  '--code-bg': '#f4f3ec',
  '--accent': '#aa3bff',
  '--accent-bg': 'rgba(170, 59, 255, 0.08)',
  '--accent-border': 'rgba(170, 59, 255, 0.3)',
  '--social-bg': 'rgba(244, 243, 236, 0.5)',
  '--shadow': 'rgba(0, 0, 0, 0.08) 0 4px 12px',
  '--navbar-bg': 'rgba(255, 255, 255, 0.98)',
  '--line': 'transparent',
  '--bg-soft': '#f8f9fa',
  '--panel': 'rgba(99, 102, 241, 0.04)',
  '--panel-strong': 'rgba(99, 102, 241, 0.08)',
};

const darkTheme = {
  '--text': '#cbd5e1',
  '--text-h': '#f1f5f9',
  '--bg': '#0f172a',
  '--border': 'transparent',
  '--code-bg': '#1a213e',
  '--accent': '#d8b4fe',
  '--accent-bg': 'rgba(216, 180, 254, 0.1)',
  '--accent-border': 'rgba(216, 180, 254, 0.3)',
  '--social-bg': 'rgba(30, 41, 59, 0.6)',
  '--shadow': 'rgba(0, 0, 0, 0.3) 0 4px 12px',
  '--navbar-bg': 'rgba(15, 23, 42, 0.98)',
  '--line': 'transparent',
  '--bg-soft': '#1a2641',
  '--panel': 'rgba(99, 102, 241, 0.08)',
  '--panel-strong': 'rgba(99, 102, 241, 0.12)',
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    const variables = theme === 'light' ? lightTheme : darkTheme;
    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
