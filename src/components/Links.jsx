import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles, Box } from '@material-ui/core';
import * as colors from '../theme/colors';

const Links = () => {
  return (
    <List>
      <CustomLink path="/" text="About me" Icon={<PersonIcon />} />
      <CustomLink path="/portfolio" text="Portfolio" Icon={<WorkIcon />} />
      <CustomLink path="/resume" text="Resume" Icon={<DescriptionIcon />} />
    </List>
  );
};

const CustomLink = ({ path, text, Icon }) => {
  const classes = useStyles();
  return (
    <Link to={path}>
      <ListItem>
        <ListItemIcon className={classes.icon}>{Icon}</ListItemIcon>
        <ListItemText>
          <Box className={classes.link}>{text}</Box>
        </ListItemText>
      </ListItem>
    </Link>
  );
};

export default Links;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: colors.white,
  },
  link: {
    color: colors.white,
    fontWeight: 'bold',
  },
}));
