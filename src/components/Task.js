import {
  makeStyles,
  ListItemIcon,
  ListItem,
  ListItemText,
  Checkbox,
} from '@material-ui/core';
import { firestore } from '../firebaseIndex';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  done: {
    textDecoration: 'line-through',
  },
}));

const Task = ({ task }) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { currentProject } = useContext(UserContext);

  // line through to do items when checked
  const onCheck = (task) => {
    if (!task.checked) {
      firestore
        .collection('users')
        .doc(user.uid)
        .collection('Projects')
        .doc(currentProject)
        .collection('Tasks')
        .doc(task.id)
        .update({
          checked: true,
        })
        .catch((err) => console.log(err));
    } else if (task.checked) {
      firestore
        .collection('users')
        .doc(user.uid)
        .collection('Projects')
        .doc(currentProject)
        .collection('Tasks')
        .doc(task.id)
        .update({
          checked: false,
        })
        .catch((err) => console.log(err));
    }
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
