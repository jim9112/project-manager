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
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { sampleTasks } from '../sampleData';
import AddTask from './AddTask';

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
}));

const SprintCard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
  const handleOpen = () => {
    setOpen(true);
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
      <AddTask open={open} setOpen={setOpen} todoList={todoList} setTodoList={setTodoList} />
    </Paper>
  );
};

export default SprintCard;
