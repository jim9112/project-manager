import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  scroll: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '1rem',
  },
}));

const CardScrollContainter = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.scroll}>{children}</div>;
};

export default CardScrollContainter;
