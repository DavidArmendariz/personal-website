import { createContext, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ThemeContext = createContext<{
  toggleColorMode: () => void;
  mode: PaletteMode;
}>({
  toggleColorMode: () => {},
  mode: 'light',
});

const Theme = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const themeContextValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode, setMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
