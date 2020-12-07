import {
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 500,
  },
  form: {
    padding: '1rem',
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };
  return (
    <div className={classes.root}>
      <Grid container align="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4"> Sign In </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <TextField id="email" label="Email" required fullWidth />
              <TextField id="password" label="Password" required fullWidth />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
