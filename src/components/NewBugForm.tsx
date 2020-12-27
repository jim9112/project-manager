import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
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
  title?: string;
  desc?: string;
  priority?: string;
}

const NewBugForm: React.FC<Props> = ({ setOpen, type, id, currentValues }) => {
  const classes = useStyles();

  const { handleInput, input, setInput } = useForm();
  const addToCollection = useAddToProjectSubCollection('Bugs');
  const editCollection = useEditProjectSubCollection('Bugs');

  const { title, desc, priority }: Input = input;

  // set standard data for not that doesnt come from form input

  useEffect(() => {
    if (!currentValues) {
      setInput({ ...input, date: Date.now(), priority: 'High' });
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
        id="title"
        label="Bug Title"
        type="text"
        fullWidth
        value={title}
        onChange={handleInput}
      />
      <TextField
        required={true}
        multiline
        margin="dense"
        id="desc"
        label="Bug Description"
        type="text"
        fullWidth
        value={desc}
        onChange={handleInput}
      />
      <InputLabel id="priority-label">Severity</InputLabel>
      <Select
        fullWidth
        margin="dense"
        labelId="priority-label"
        id="priority"
        value={priority}
        onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
          setInput({ ...input, priority: e.target.value as string });
        }}>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
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

export default NewBugForm;
