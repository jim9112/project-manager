import { Fab, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '../components/AppBar';
import ProjectCard from '../components/ProjectCard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem',
  },
}));
const Home = ({ history }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar history={history} />
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <ProjectCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
