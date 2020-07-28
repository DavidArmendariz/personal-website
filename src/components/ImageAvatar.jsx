import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const photo = `${process.env.PUBLIC_URL}/assets/images/photo.jpeg`;

const ImageAvatar = () => {
  const classes = useStyles();
  return (
    <Avatar className={classes.avatar} alt="David Armendariz" src={photo} />
  );
};
export default ImageAvatar;

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(20),
    width: theme.spacing(20),
  },
}));
