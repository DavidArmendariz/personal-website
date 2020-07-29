import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

const Links = () => {
  return (
    <List>
      <CustomLink path="/" text="About me" Icon={<PersonIcon />} />
      <CustomLink path="/portfolio" text="Portfolio" Icon={<WorkIcon />} />
    </List>
  );
};

const CustomLink = ({ path, text, Icon }) => {
  return (
    <Link to={path}>
      <ListItem>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default Links;
