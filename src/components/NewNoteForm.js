import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useContext } from 'react';
import { getDate } from '../utils/helperFunctions';
import useForm from '../utils/useForm';
import UserContext from '../context/UserContext';

const useStyles = makeStyles((theme) => ({
  newTextForm: {
    padding: '1rem',
  },
}));

const NewNoteForm = ({ setOpen }) => {
  const classes = useStyles();

  const [handleInput, input, setInput] = useForm();
  const {notes, setNotes} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, date: getDate() });
    setInput({ ...input, archived: false });
    const updateList = notes;
    updateList.unshift({ ...input });
    setNotes([...updateList]);
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
          Add Task
        </Button>
      </DialogActions>
    </form>
  );
};

export default NewNoteForm;
