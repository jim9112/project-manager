import {
  Paper,
  Typography,
  makeStyles,
  Divider,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Checkbox,
  Fab,
} from '@material-ui/core';
import { useContext, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import UserContext from '../context/UserContext';
import AuthContext from '../context/AuthContext';
import DialogContainer from '../containers/DialogContainer';
import NewTaskForm from '../components/NewTaskForm';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';

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
  const { todoList, setTodoList } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  // line through to do items when checked
  const onCheck = (task, i) => {
    const updateList = todoList;
    if (task.checked === true) {
      updateList[i].checked = false;
      updateList.unshift(updateList.splice(i, 1)[0]);
    } else {
      updateList[i].checked = true;
      updateList.push(updateList.splice(i, 1)[0]);
    }
    setTodoList([...updateList]);
  };

  // add form dialog for new task
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Tasks
      </Typography>
      <Divider />
      <List>
        {todoList.map((task, i) => {
          return (
            <ListItem key={i} divider={true}>
              <ListItemIcon>
                <Checkbox
                  checked={task.checked}
                  onChange={() => onCheck(task, i)}
                  color="primary"
                />
              </ListItemIcon>
              <ListItemText className={task.checked ? classes.done : ''}>
                {task.task}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
      <div className={classes.footerContainer}>
        <Fab size="small" color="primary" aria-label="add" onClick={handleOpen}>
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
