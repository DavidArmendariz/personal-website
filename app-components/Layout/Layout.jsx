import { useState } from 'react';
import Link from 'next/link';
import ResumeIcon from '@mui/icons-material/ContactPage';
import MenuIcon from '@mui/icons-material/Menu';
import AboutMeIcon from '@mui/icons-material/Person';
import PortfolioIcon from '@mui/icons-material/Work';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';
import DarkMode from './DarkMode';

const DRAWER_WIDTH = 240;
const NavLinks = [
  { id: 'about-me', name: 'About me', path: '/', Icon: AboutMeIcon },
  {
    id: 'portfolio',
    name: 'Portfolio',
    path: '/portfolio',
    Icon: PortfolioIcon,
  },
  { id: 'resume', name: 'Resume', path: '/resume', Icon: ResumeIcon },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderDrawer = () => (
    <>
      <Divider />
      <List>
        {NavLinks.map(({ id, name, path, Icon }) => (
          <Link key={id} href={path} passHref>
            <ListItemButton component="a">
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );

  return (
    <Root>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar sx={{ display: { md: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <DarkMode />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
        aria-label="sidebar"
      >
        {smallScreen ? (
          <StyledDrawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {renderDrawer()}
          </StyledDrawer>
        ) : (
          <StyledDrawer variant="permanent" open>
            {renderDrawer()}
          </StyledDrawer>
        )}
      </Box>
      <MainComponent
        component="main"
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar>{!smallScreen && <DarkMode />}</Toolbar>
        {children}
      </MainComponent>
    </Root>
  );
};

export default Layout;

const Root = styled(Box)`
  display: flex;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${DRAWER_WIDTH}px;
  }
`;

const MainComponent = styled(Box)`
  flex-grow: 1;
  padding: 3rem;
`;
