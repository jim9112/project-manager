import React from 'react';
import { Typography, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

interface Props {
  title: string;
}

const CardHeader: React.FC<Props> = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Divider />
    </>
  );
};

export default CardHeader;
