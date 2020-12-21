import { makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const CardFooter = ({ setOpen }) => {
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
