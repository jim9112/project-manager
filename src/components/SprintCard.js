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
  const [todoList, setTodoList] = useState([
    {
      checked: false,
      task: 'First Task',
    },
    {
      checked: true,
      task: 'Second Task',
    },
    {
      checked: false,
      task: 'Third Task',
    },
  ]);

  // line through to do items when checked
  const onCheck = (task, i) => {
    const updateList = todoList;
    if (task.checked === true) {
      updateList[i].checked = false;
    } else {
      updateList[i].checked = true;
    }
    setTodoList([...updateList]);
  };

  // add form dialog for new task

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
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </Paper>
  );
};

export default SprintCard;
