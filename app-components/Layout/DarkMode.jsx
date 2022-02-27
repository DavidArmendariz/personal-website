import { useContext } from 'react';
import {
  MdBrightness5 as TurnOffDarkModeIcon,
  MdBrightness4 as TurnOnDarkModeIcon,
} from 'react-icons/md';
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
