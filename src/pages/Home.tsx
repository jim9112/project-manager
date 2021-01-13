import { Fab, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import AppBar from '../components/AppBar';
import ProjectCard from '../components/ProjectCard';
import DialogContainer from '../containers/DialogContainer';
import NewProjectForm from '../components/NewProjectForm';
import useGetAndDisplayProjects from '../utils/useGetAndDisplayProjects';

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

interface Props {
  history: { push: (location: string) => void };
}

const Home: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const { projects, loading } = useGetAndDisplayProjects();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar history={history} />
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {!loading ? (
              projects.map((project) => {
                if (!project.archived)
                  return (
                    <ProjectCard
                      key={project.id}
                      name={project.name}
                      desc={project.desc}
                      repo={project.repo || null}
                      projKey={project.id}
                      history={history}
                      id={project.id}
                    />
                  );
              })
            ) : (
              <h1>Loading...</h1>
            )}
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
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Project"
        type="New"
        NewComponentForm={NewProjectForm}
      />
    </>
  );
};

export default Home;
