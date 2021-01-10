import { Button, Typography, Grid, Paper, makeStyles } from '@material-ui/core';
import { signInWithGithub } from '../firebaseIndex';
import useSignIn from '../utils/useSignIn';
import AuthContext from '../context/AuthContext';
import { useContext, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  paper: {
    maxWidth: 500,
    minHeight: 200,
    textAlign: 'center',
    padding: '1rem',
  },
  container: {
    height: '500px',
  },
}));

interface Props {
  history: { push: (location: string) => void };
}

const SignIn: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const { user }: any = useContext(AuthContext);
  const [handleSignIn] = useSignIn();

  useEffect(() => {
    if (user) history.push('/home');
  }, [user]);

  const handleClick = () => {
    handleSignIn(signInWithGithub);
  };

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        alignContent="center"
        justify="center"
        component="div">
        <Grid item xs={12} sm={8} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              {' '}
              DevProjectPlanner{' '}
            </Typography>
            <Typography variant="body2" paragraph>
              {' '}
              An application thats helps you to manage your personal projects.
              Track tasks, document bugs, and take quick notes. To get started
              log in with your GitHub credentials below.{' '}
            </Typography>
            <Button
              variant="contained"
              type="button"
              color="secondary"
              onClick={handleClick}>
              Sign in with GitHub
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
