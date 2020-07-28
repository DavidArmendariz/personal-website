import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import * as colors from '../theme/colors';

const Links = () => {
  return (
    <List>
      <CustomLink path="/" text="About me" Icon={<PersonIcon />} />
      <CustomLink path="/portfolio" text="Portfolio" Icon={<WorkIcon />} />
    </List>
  );
};

const CustomLink = ({ path, text, Icon }) => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={path}>
      <ListItem>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default Links;

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: colors.black,
  },
}));
