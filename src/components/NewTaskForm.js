import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useEffect } from 'react';
import useForm from '../utils/useForm';

import useAddToProjectSubCollection from '../utils/useAddToProjectSubCollection';

const useStyles = makeStyles((theme) => ({
  newTextForm: {
    padding: '1rem',
  },
}));

const NewTaskForm = ({ setOpen }) => {
  const classes = useStyles();
  const [handleInput, input, setInput] = useForm();
  const addToCollection = useAddToProjectSubCollection('Tasks');

  // set standard data for not that doesnt come from form input
  useEffect(() => {
    setInput({ ...input, checked: false, date: Date.now() });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCollection(input);
    setOpen(false);
  };

  return (
    <form className={classes.newTextForm} onSubmit={handleSubmit}>
      <TextField
        autoFocus
        required={true}
        margin="dense"
        id="task"
        label="New Task"
        type="text"
        fullWidth
        onChange={handleInput}
      />
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Add Task
        </Button>
      </DialogActions>
    </form>
  );
};

export default NewTaskForm;
