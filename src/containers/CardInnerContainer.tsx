import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inner: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const CardInnerContainter = ({ children }: any) => {
  const classes = useStyles();
  return <div className={classes.inner}>{children}</div>;
};

export default CardInnerContainter;
