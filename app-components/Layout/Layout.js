import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';

const DRAWER_WIDTH = 240;

const drawer = (
  <>
    <Toolbar />
    <Divider />
    <List>
      {['About me', 'Portfolio', 'Resume'].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </>
);

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
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
            {drawer}
          </StyledDrawer>
        ) : (
          <StyledDrawer variant="permanent" open>
            {drawer}
          </StyledDrawer>
        )}
      </Box>
      <MainComponent
        component="main"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        {children}
      </MainComponent>
    </Container>
  );
}

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${DRAWER_WIDTH}px;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const MainComponent = styled(Box)`
  flex-grow: 1;
  padding: 3rem;
`;
