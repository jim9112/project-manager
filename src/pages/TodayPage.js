import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem',
  },
  paper: {
    height: '100vh',
    width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const TodayPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodayPage;
