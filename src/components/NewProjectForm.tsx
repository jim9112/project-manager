import React, { useEffect } from 'react';
import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import useForm from '../utils/useForm';
import useWriteToDatabase from '../utils/useWriteToDatabase';
const useStyles = makeStyles((theme) => ({
  newTextForm: {
    padding: '1rem',
  },
}));

interface Props {
  setOpen: (open: boolean) => void;
  id: string;
  type: 'New' | 'Edit';
  currentValues: {
    desc: string;
    name: string;
  };
}

interface Input {
  name?: string;
  desc?: string;
}

const NewProjectForm: React.FC<Props> = ({
  setOpen,
  type,
  id,
  currentValues,
}) => {
  const { handleInput, input, setInput } = useForm();
  const [addToCollection] = useWriteToDatabase();

  const classes = useStyles();

  const { name, desc }: Input = input;

  // set standard data for not that doesnt come from form input || add current value on edit
  useEffect(() => {
    if (!currentValues) {
      setInput({ ...input });
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
      console.log('edit projects');
      setOpen(false);
    }
  };

  return (
    <form className={classes.newTextForm} onSubmit={handleSubmit}>
      <TextField
        autoFocus
        required={true}
        margin="dense"
        id="name"
        label="Project Title"
        type="text"
        value={name}
        fullWidth
        onChange={handleInput}
      />
      <TextField
        required={true}
        margin="dense"
        id="desc"
        label="Project Description"
        type="text"
        value={desc}
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

export default NewProjectForm;
