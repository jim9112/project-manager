import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import useForm from '../utils/useForm';

import useAddToProjectSubCollection from '../utils/useAddToProjectSubCollection';
import useEditProjectSubCollection from '../utils/useEditProjectSubCollection';

const useStyles = makeStyles((theme) => ({
  newTextForm: {
    padding: '1rem',
  },
}));

interface Props {
  setOpen: (open: boolean) => void;
  type: 'New' | 'Edit';
  id: string;
  currentValues: {};
}

interface Input {
  task?: string;
}

const NewTaskForm: React.FC<Props> = ({ setOpen, type, id, currentValues }) => {
  const classes = useStyles();
  const { handleInput, input, setInput } = useForm();
  const addToCollection = useAddToProjectSubCollection('Tasks');
  const editCollection = useEditProjectSubCollection('Tasks');

  const { task }: Input = input;

  // set standard data for not that doesnt come from form input
  useEffect(() => {
    if (!currentValues) {
      setInput({ ...input, checked: false, date: Date.now() });
    } else if (currentValues) {
      setInput(currentValues);
    }
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (type === 'New') {
      addToCollection(input);
      setOpen(false);
    } else if (type === 'Edit') {
      editCollection(id, input);
      setOpen(false);
    }
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
        multiline
        value={task}
        onChange={handleInput}
      />
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

export default NewTaskForm;
