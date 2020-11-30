import { Paper, Typography, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
  },
  title: {
    textAlign: 'center',
  },
}));

const SprintCard = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Current Sprint
      </Typography>
      <Divider />
    </Paper>
  );
};

export default SprintCard;
