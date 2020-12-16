import {
  makeStyles,
  ListItemIcon,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { firestore } from '../firebaseIndex';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';
import useDeleteFromProjectSubCollection from '../utils/useDeleteFromProjectSubCollection';
import ConfirmationAlert from './ConfirmationAlert';

const useStyles = makeStyles((theme) => ({
  done: {
    textDecoration: 'line-through',
  },
}));

const Task = ({ task }) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { currentProject } = useContext(UserContext);
  const removeItem = useDeleteFromProjectSubCollection();
  const [open, setOpen] = useState(false);

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

  // handle clicking the delete button
  const handleClick = (e) => {
    if (task.checked) {
      removeItem('Tasks', task.id);
    } else if (!task.checked) {
      setOpen(true);
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
      <IconButton
        aria-label="delete"
        color="secondary"
        edge="end"
        onClick={handleClick}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationAlert
        open={open}
        setOpen={setOpen}
        title={'Delete Task?'}
        message={'Are you sure you want to delete this uncompleted task?'}
        action={removeItem}
        param1={'Tasks'}
        param2={task.id}
      />
    </ListItem>
  );
};

export default Task;
