import {
  Paper,
  Typography,
  makeStyles,
  Divider,
  List,
  Fab,
} from '@material-ui/core';
import { useContext, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import AuthContext from '../context/AuthContext';
import DialogContainer from '../containers/DialogContainer';
import NewTaskForm from './NewTaskForm';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
import Task from './Task';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    minHeight: 500,
  },
  title: {
    textAlign: 'center',
  },
  done: {
    textDecoration: 'line-through',
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const TasksCard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Tasks');
  const { user } = useContext(AuthContext);

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Tasks
      </Typography>
      <Divider />
      <List>
        {!loading ? (
          output.map((task) => {
            return <Task key={task.id} task={task} />;
          })
        ) : (
          <h4>Loading</h4>
        )}
      </List>
      <div className={classes.footerContainer}>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => setOpen(true)}>
          <AddIcon />
        </Fab>
      </div>
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Task"
        NewComponentForm={NewTaskForm}
      />
    </Paper>
  );
};

export default TasksCard;
