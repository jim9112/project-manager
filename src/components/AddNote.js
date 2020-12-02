import {
    makeStyles,
    Dialog,
    DialogTitle,
    TextField,
    DialogActions,
    Button,
  } from '@material-ui/core';
  import { useState } from 'react';


  const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: 'center',
    },
    newTextForm: {
      padding: '1rem',
    },
  }));

const AddNote = ({ open, setOpen, notes, setNotes}) => {
    const classes = useStyles();
    const [newNote, setNewNote] = useState({
        archived: false,
        date: 'a date',
        title: '',
        content: '',
    });
    const handleClose = () => {
        setOpen(false);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const updateList = notes;
        updateList.unshift({ ...newNote});
        setNotes([...updateList]);
        handleClose();
      };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title">
          Add Note
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
            onChange={(e) => setNewNote({...newNote, title: e.currentTarget.value})}
          />
          <TextField
            required={true}
            margin="dense"
            id="content"
            label="Note Content"
            type="text"
            fullWidth
            onChange={(e) => setNewNote({...newNote, content: e.currentTarget.value})}
          />
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
    )
}

export default AddNote