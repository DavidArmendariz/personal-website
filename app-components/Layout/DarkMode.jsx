import { useContext } from 'react';
import TurnOnDarkModeIcon from '@mui/icons-material/Brightness4';
import TurnOffDarkModeIcon from '@mui/icons-material/Brightness5';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from 'app-contexts/Theme';

const DarkMode = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <IconButton
      sx={{ ml: 'auto' }}
      onClick={themeContext.toggleColorMode}
      color="inherit"
    >
      {themeContext.mode === 'dark' ? (
        <TurnOffDarkModeIcon />
      ) : (
        <TurnOnDarkModeIcon />
      )}
    </IconButton>
  );
};

export default DarkMode;
