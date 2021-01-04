import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '500px',
  },
  paper: {
    textAlign: 'center',
    padding: '1rem',
  },
  container: {
    height: '100%',
  },
}));

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        alignContent="center"
        justify="center">
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h3">404 Page Not found</Typography>
            <Link to="/"> Home </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
