import { Fab, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useContext, useState } from 'react';
import AppBar from '../components/AppBar';
import ProjectCard from '../components/ProjectCard';
import DialogContainer from '../containers/DialogContainer';
import UserContext from '../context/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem',
  },
  addButtonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));
const Home = ({ history }) => {
  const classes = useStyles();
  const { projects, setProjects } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar history={history} />
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {projects &&
              Object.keys(projects).map((project, i) => (
                <ProjectCard
                  key={`${project}${i}`}
                  name={projects[project].name}
                  desc={projects[project].desc}
                />
              ))}
            <Grid className={classes.addButtonContainer} item>
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => setOpen(true)}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DialogContainer open={open} setOpen={setOpen} title="New Project" />
    </>
  );
};

export default Home;
