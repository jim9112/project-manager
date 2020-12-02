import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BugsCard from '../components/BugsCard';
import NotesCard from '../components/NotesCard';
import SprintCard from '../components/SprintCard';
import AppBar from '../components/AppBar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem',
  },
}));

const TodayPage = ({ history }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar history={history} />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <SprintCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BugsCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <NotesCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TodayPage;
