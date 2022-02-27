import { createContext, useEffect, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as BaseThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

export const ThemeContext = createContext<{
  toggleColorMode: () => void;
  colorMode: PaletteMode;
}>({
  toggleColorMode: () => {},
  colorMode: 'light',
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<PaletteMode>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let initialColorMode: PaletteMode;
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedColorPreference =
      persistedColorPreference &&
      (persistedColorPreference === 'dark' ||
        persistedColorPreference === 'light');
    if (hasPersistedColorPreference) {
      initialColorMode = persistedColorPreference;
    } else {
      initialColorMode = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
    }
    setIsMounted(true);
    setColorMode(initialColorMode);
  }, []);

  const themeContextValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode((prevMode) => {
          const newColorMode = prevMode === 'light' ? 'dark' : 'light';
          window.localStorage.setItem('color-mode', newColorMode);
          return newColorMode;
        });
      },
      colorMode: colorMode || 'light',
    }),
    [colorMode, setColorMode]
  );

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            ...(colorMode && { mode: colorMode }),
          },
        })
      ),
    [colorMode]
  );

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <BaseThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </BaseThemeProvider>
    </ThemeContext.Provider>
  );
};
