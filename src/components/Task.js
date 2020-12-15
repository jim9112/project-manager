import {
  makeStyles,
  ListItemIcon,
  ListItem,
  ListItemText,
  Checkbox,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  done: {
    textDecoration: 'line-through',
  },
}));

const Task = ({ task }) => {
  const classes = useStyles();

  // line through to do items when checked
  const onCheck = (task) => {
    console.log('Checked');
  };
  return (
    <ListItem divider={true}>
      <ListItemIcon>
        <Checkbox
          checked={task.checked}
          onChange={() => onCheck(task)}
          color="primary"
        />
      </ListItemIcon>
      <ListItemText className={task.checked ? classes.done : ''}>
        {task.task}
      </ListItemText>
    </ListItem>
  );
};

export default Task;
