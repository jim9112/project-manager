import { Paper, Typography, makeStyles, Divider } from '@material-ui/core';
import Bug from './Bug';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
  },
  title: {
    textAlign: 'center',
  },
}));

const BugsCard = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Bugs
      </Typography>
      <Divider />
      <Bug />
    </Paper>
  );
};

export default BugsCard;
