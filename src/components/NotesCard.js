import { Paper, Typography, makeStyles, Divider, Fab } from '@material-ui/core';
import { useContext, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note';
import { sampleNotes } from '../sampleData';
import DialogContainer from '../containers/DialogContainer';
import NewNoteForm from '../components/NewNoteForm';
import UserContext from '../context/UserContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    // height: '100vh',
    width: '100%',
    // overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const NotesCard = () => {
  const classes = useStyles();
  const {notes, setNotes} = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Notes
      </Typography>
      <Divider />
      {notes.map((note, i) => (
        <Note
          key={i}
          archived={note.archived}
          date={note.date}
          title={note.title}
          content={note.content}
        />
      ))}
      <div className={classes.footerContainer}>
        <Fab size="small" color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </div>
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Note"
        NewComponentForm={NewNoteForm}
      />
    </Paper>
  );
};

export default NotesCard;
