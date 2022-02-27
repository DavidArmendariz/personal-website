import { createContext, useEffect, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as BaseThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocalStorage } from 'app-hooks';

export const ThemeContext = createContext<{
  toggleColorMode: () => void;
  colorMode: PaletteMode;
}>({
  toggleColorMode: () => {},
  colorMode: 'light',
});

export const ThemeProvider: React.FC = ({ children }) => {
  const settingsDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useLocalStorage<PaletteMode | null>(
    'color-mode',
    null
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let initialColorMode: PaletteMode;
    const colorModeFromLocalStorage = window.localStorage.getItem('color-mode');
    const persistedColorPreference =
      colorModeFromLocalStorage && JSON.parse(colorModeFromLocalStorage);
    const hasPersistedColorPreference =
      persistedColorPreference &&
      (persistedColorPreference === 'dark' ||
        persistedColorPreference === 'light');
    if (hasPersistedColorPreference) {
      initialColorMode = persistedColorPreference;
    } else {
      initialColorMode = settingsDarkMode ? 'dark' : 'light';
    }
    setColorMode(initialColorMode, false);
    setIsMounted(true);
  }, [settingsDarkMode, setColorMode]);

  const themeContextValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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

  if (!isMounted || !colorMode) {
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
