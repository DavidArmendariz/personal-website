import { createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useLocalStorage from 'app-hooks/local-storage';

export const ThemeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

const Theme = ({ children }) => {
  const [mode, setMode] = useLocalStorage('mode', 'light');
  const themeContextValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode: mode,
    }),
    [mode, setMode]
  );

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
