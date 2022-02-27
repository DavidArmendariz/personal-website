import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
  colorMode?: PaletteMode;
}>({
  toggleColorMode: () => {},
  colorMode: 'light',
});

export const ThemeProvider: React.FC = ({ children }) => {
  const settingsDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode, getColorMode] = useLocalStorage<
    PaletteMode | undefined
  >('color-mode', undefined);
  const [isMounted, setIsMounted] = useState(false);

  const getInitialColorMode = useCallback(() => {
    const persistedColorPreference = getColorMode();
    if (persistedColorPreference) {
      return persistedColorPreference;
    }
    return settingsDarkMode ? 'dark' : 'light';
  }, [settingsDarkMode, getColorMode]);

  useEffect(() => {
    setColorMode(getInitialColorMode());
    setIsMounted(true);
  }, [setColorMode, getInitialColorMode]);

  const themeContextValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      colorMode,
    }),
    [colorMode, setColorMode]
  );

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: colorMode,
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
