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

const NotesCard = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Notes
      </Typography>
      <Divider />
    </Paper>
  );
};

export default NotesCard;
