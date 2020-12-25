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

const NewProjectForm = ({ setOpen }) => {
  const { handleInput, input } = useForm();
  const [addToCollection] = useWriteToDatabase();

  const classes = useStyles();

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
        id="name"
        label="Project Title"
        type="text"
        fullWidth
        onChange={handleInput}
      />
      <TextField
        required={true}
        margin="dense"
        id="desc"
        label="Project Description"
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

export default NewProjectForm;
