import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useEffect } from 'react';
import useForm from '../utils/useForm';
import useAddToProjectSubCollection from '../utils/useAddToProjectSubCollection';
import useEditProjectSubCollection from '../utils/useEditProjectSubCollection';

const useStyles = makeStyles((theme) => ({
  newTextForm: {
    padding: '1rem',
  },
}));

const NewNoteForm = ({ setOpen, type, id, currentValues }) => {
  const classes = useStyles();

  const [handleInput, input, setInput] = useForm();
  const addToCollection = useAddToProjectSubCollection('Notes');
  const editCollection = useEditProjectSubCollection('Notes');

  // set standard data for not that doesnt come from form input || add current value on edit
  useEffect(() => {
    if (!currentValues) {
      setInput({ ...input, date: Date.now() });
    } else if (currentValues) {
      setInput(currentValues);
    }
  }, []);

  const handleSubmit = (e) => {
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
        label="Note Title"
        type="text"
        fullWidth
        value={input.title}
        onChange={handleInput}
      />
      <TextField
        required={true}
        multiline
        margin="dense"
        id="content"
        label="Note Content"
        type="text"
        fullWidth
        value={input.content}
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

export default NewNoteForm;
