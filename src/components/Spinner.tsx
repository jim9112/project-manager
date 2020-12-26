import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
  },
}));

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinnerContainer}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Spinner;
