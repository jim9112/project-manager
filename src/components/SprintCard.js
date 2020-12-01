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
  Dialog,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { sampleTasks } from '../sampleData';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
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
  newTextForm: {
    padding: '1rem',
  },
}));

const SprintCard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([...sampleTasks]);

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
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateList = todoList;
    updateList.push({ checked: false, task: newTask });
    setTodoList([...updateList]);
    handleClose();
  };

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Current Sprint
      </Typography>
      <Divider />
      <Typography varient="h3" align="center">
        Build Today Page
      </Typography>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title">
          Add Task
        </DialogTitle>
        <form className={classes.newTextForm} onSubmit={handleSubmit}>
          <TextField
            autoFocus
            required={true}
            margin="dense"
            id="name"
            label="New Task"
            type="text"
            fullWidth
            onChange={(e) => setNewTask(e.currentTarget.value)}
          />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Task
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Paper>
  );
};

export default SprintCard;
