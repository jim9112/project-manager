import {
  makeStyles,
  Dialog,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useState } from 'react';
import { getDate } from '../utils/helperFunctions'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
  newTextForm: {
    padding: '1rem',
  },
}));

const AddBug = ({ open, setOpen, bugs, setBugs }) => {
  const classes = useStyles();
  const [newBug, setNewBug] = useState({
    archived: false,
    date: getDate(),
    title: '',
    desc: '',
    priority: 'High',
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateList = bugs;
    updateList.unshift({ ...newBug });
    setBugs([...updateList]);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle className={classes.title} id="form-dialog-title">
        Add A New Bug
      </DialogTitle>
      <form className={classes.newTextForm} onSubmit={handleSubmit}>
        <TextField
          autoFocus
          required={true}
          margin="dense"
          id="title"
          label="Note Title"
          type="text"
          fullWidth
          onChange={(e) =>
            setNewBug({ ...newBug, title: e.currentTarget.value })
          }
        />
        <TextField
          required={true}
          margin="dense"
          id="desc"
          label="Bug Description"
          type="text"
          fullWidth
          onChange={(e) =>
            setNewBug({ ...newBug, desc: e.currentTarget.value })
          }
        />
        <InputLabel id="demo-simple-select-label">Severity</InputLabel>
        <Select
          fullWidth
          margin="dense"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={newBug.priority}
          onChange={(e) => {
            setNewBug({ ...newBug, priority: e.target.value });
          }}>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Add Task
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddBug;
