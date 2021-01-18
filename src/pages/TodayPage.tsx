import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BugsCard from '../components/BugsCard';
import NotesCard from '../components/NotesCard';
import TasksCard from '../components/TasksCard';
import AppBar from '../components/AppBar';
import ProjectHeader from '../components/ProjectHeader';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem',
  },
}));

interface Props {
  history: { push: (location: string) => void };
}

const TodayPage: React.FC<Props> = ({ history }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar history={history} />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <ProjectHeader />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TasksCard />
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
