import { useContext } from 'react';
import TurnOnDarkModeIcon from '@mui/icons-material/Brightness4';
import TurnOffDarkModeIcon from '@mui/icons-material/Brightness5';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from '@/contexts/Theme';

const DarkMode = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <IconButton
      aria-label="dark mode button"
      sx={{ ml: 'auto' }}
      onClick={themeContext.toggleColorMode}
      color="inherit"
    >
      {themeContext.colorMode === 'dark' ? (
        <TurnOffDarkModeIcon />
      ) : (
        <TurnOnDarkModeIcon />
      )}
    </IconButton>
  );
};

export default DarkMode;
