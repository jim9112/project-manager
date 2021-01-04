import {
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
    textAlign: 'center',
  },
  container: {
    height: '500px',
  },
  form: {
    padding: '1rem',
  },
}));

interface Props {
  history: { push: (location: string) => void };
}

const SignUp: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const { user }: any = useContext(AuthContext);
  const [handleSignIn] = useSignIn();

  useEffect(() => {
    if (user) history.push('/home');
  }, [user]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };

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
            <Typography variant="h4"> Sign In </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <TextField id="email" label="Email" required fullWidth />
              <TextField id="password" label="Password" required fullWidth />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
            <Typography variant="body1">or</Typography>
            <Button
              variant="contained"
              type="button"
              color="secondary"
              onClick={handleClick}>
              Sign in with GitHub
            </Button>
            <Typography variant="body1">Dont have an account yet?</Typography>{' '}
            <Link to="/signup">Sign Up</Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
