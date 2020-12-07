import {
  makeStyles,
  TextField,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useContext, useEffect } from 'react';
import useForm from '../utils/useForm';
import UserContext from '../context/UserContext';

const useStyles = makeStyles((theme) => ({
  newTextForm: {
    padding: '1rem',
  },
}));

const NewBugForm = ({ setOpen }) => {
  const classes = useStyles();

  const [handleInput, input, setInput] = useForm();
  const { bugs, setBugs } = useContext(UserContext);

  // set standard data for not that doesnt come from form input
  useEffect(() => {
    setInput({ ...input, archived: false, date: Date.now(), priority: 'High' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateList = bugs;
    updateList.unshift({ ...input });
    setBugs([...updateList]);
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
        id="desc"
        label="Bug Description"
        type="text"
        fullWidth
        onChange={handleInput}
      />
      <InputLabel id="priority-label">Severity</InputLabel>
      <Select
        fullWidth
        margin="dense"
        labelId="priority-label"
        id="priority"
        value={input.priority}
        onChange={(e) => handleInput(e, 'priority')}>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
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

export default NewBugForm;