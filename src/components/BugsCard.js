import { Paper, Typography, makeStyles, Divider, Fab } from '@material-ui/core';
import { useState } from 'react';
import Bug from './Bug';
import AddIcon from '@material-ui/icons/Add';
import DialogContainer from '../containers/DialogContainer';
import NewBugForm from '../components/NewBugForm';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
    paddingBottom: '1rem',
  },
  title: {
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const BugsCard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Bugs');
  const handleOpen = () => setOpen(true);
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Bugs
      </Typography>
      <Divider />
      {!loading ? (
        output.map((bug) => (
          <Bug
            key={bug.id}
            archived={bug.archived}
            date={bug.date}
            title={bug.title}
            desc={bug.desc}
            priority={bug.priority}
            id={bug.id}
          />
        ))
      ) : (
        <Spinner />
      )}
      <div className={classes.footerContainer}>
        <Fab size="small" color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </div>
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Bug"
        type={'New'}
        NewComponentForm={NewBugForm}
      />
    </Paper>
  );
};

export default BugsCard;
