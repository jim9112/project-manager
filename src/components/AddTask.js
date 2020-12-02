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

const AddTask = ({ open, setOpen, todoList, setTodoList}) => {
    const classes = useStyles();
    const [newTask, setNewTask] = useState('');
    const handleClose = () => {
        setOpen(false);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const updateList = todoList;
        updateList.unshift({ checked: false, task: newTask });
        setTodoList([...updateList]);
        handleClose();
      };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title">
          Add Task
        </DialogTitle>
        <form className={classes.newTextForm} onSubmit={handleSubmit}>
          <TextField
            autoFocus
            required={true}
            margin="dense"
            id="name"
            label="New Task"
            type="text"
            fullWidth
            onChange={(e) => setNewTask(e.currentTarget.value)}
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

export default AddTask