'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import AboutMeIcon from '@mui/icons-material/Person';
import BlogIcon from '@mui/icons-material/RssFeed';
import CoursesIcon from '@mui/icons-material/School';
import PortfolioIcon from '@mui/icons-material/Work';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SocialMedia from '@/components/SocialMedia';
import DarkMode from './DarkMode';
import styled from '@emotion/styled';

const DRAWER_WIDTH = 240;
const NAV_LINKS = [
  { id: 'about-me', name: 'About me', path: '/', Icon: AboutMeIcon },
  {
    id: 'portfolio',
    name: 'Portfolio',
    path: '/portfolio',
    Icon: PortfolioIcon,
  },
  { id: 'courses', name: 'My Courses', path: '/courses', Icon: CoursesIcon },
  { id: 'blog', name: 'Blog', path: '/blog', Icon: BlogIcon },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderDrawer = () => (
    <Box role="presentation" onClick={handleDrawerToggle}>
      <List>
        <ListItem sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <SocialMedia />
        </ListItem>
        <li>
          <Divider />
        </li>
        {NAV_LINKS.map(({ id, name, path, Icon }) => (
          <ListItem key={id}>
            <StyledLink href={path}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar>{!smallScreen && <DarkMode />}</Toolbar>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${DRAWER_WIDTH}px;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
`;
