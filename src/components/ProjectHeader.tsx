import { Paper, makeStyles, Typography, Link } from '@material-ui/core';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '1rem',
  },
}));

const ProjectHeader = () => {
  const classes = useStyles();
  const { currentProject }: any = useContext(UserContext);
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {currentProject.name}
      </Typography>
      <div>
        {currentProject.repo && (
          <Link href={currentProject.repo} target="_blank" rel="noopener">
            Go To Repo
          </Link>
        )}
      </div>
    </Paper>
  );
};

export default ProjectHeader;
