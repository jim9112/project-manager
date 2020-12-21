import { Paper, makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
    paddingBottom: '1rem',
  },
}));

const ContentCard = ({ children }) => {
  const classes = useStyles();

  return <Paper className={classes.paper}>{children}</Paper>;
};

export default ContentCard;
