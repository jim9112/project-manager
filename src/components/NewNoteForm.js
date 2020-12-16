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

const NewNoteForm = ({ setOpen }) => {
  const classes = useStyles();

  const [handleInput, input, setInput] = useForm();
  const addToCollection = useAddToProjectSubCollection('Notes');

  // set standard data for not that doesnt come from form input
  useEffect(() => {
    setInput({ ...input, archived: false, date: Date.now() });
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
        id="title"
        label="Note Title"
        type="text"
        fullWidth
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
        onChange={handleInput}
      />
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Add Note
        </Button>
      </DialogActions>
    </form>
  );
};

export default NewNoteForm;
