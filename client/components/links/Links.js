import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import { Box } from '@material-ui/core';
import { linksStyles } from './styles';
import Link from 'next/link';

const CustomLink = ({ path, text, Icon }) => {
  const classes = linksStyles();
  return (
    <Link href={path}>
      <ListItem>
        <ListItemIcon className={classes.icon}>{Icon}</ListItemIcon>
        <ListItemText>
          <Box className={classes.link}>{text}</Box>
        </ListItemText>
      </ListItem>
    </Link>
  );
};

export default function Links() {
  return (
    <List>
      <CustomLink path="/" text="About me" Icon={<PersonIcon />} />
      <CustomLink path="/portfolio" text="Portfolio" Icon={<WorkIcon />} />
      <CustomLink path="/resume" text="Resume" Icon={<DescriptionIcon />} />
    </List>
  );
}
