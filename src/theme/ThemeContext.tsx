import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';

import { useColorScheme } from 'react-native';

import { lightColors, darkColors } from '../constants/colors';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  themeMode: ThemeMode;
  isDark: boolean;
  colors: typeof lightColors;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemTheme = useColorScheme();

  const [themeMode, setThemeMode] = useState<ThemeMode>('system');

  const isDark =
    themeMode === 'system' ? systemTheme === 'dark' : themeMode === 'dark';

  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  const value = {
    themeMode,
    isDark,
    colors,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used inside ThemeProvider');
  }

  return context;
};
