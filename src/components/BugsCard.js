import { Paper, Typography, makeStyles, Divider, Fab } from '@material-ui/core';
import { useContext, useState } from 'react';
import Bug from './Bug';
import AddIcon from '@material-ui/icons/Add';
import AddBug from './AddBug';
import DialogContainer from '../containers/DialogContainer';
import NewBugForm from '../components/NewBugForm';
import UserContext from '../context/UserContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
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
  const { bugs, setBugs } = useContext(UserContext);
  const handleOpen = () => setOpen(true);
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Bugs
      </Typography>
      <Divider />
      {bugs.map((bug, i) => (
        <Bug
          key={i}
          archived={bug.archived}
          date={bug.date}
          title={bug.title}
          desc={bug.desc}
          priority={bug.priority}
        />
      ))}
      <div className={classes.footerContainer}>
        <Fab size="small" color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </div>
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Task"
        NewComponentForm={NewBugForm}
      />
    </Paper>
  );
};

export default BugsCard;
