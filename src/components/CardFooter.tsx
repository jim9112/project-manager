import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

interface Props {
  setOpen: (open: boolean) => void;
}

const CardFooter: React.FC<Props> = ({ setOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default CardFooter;
