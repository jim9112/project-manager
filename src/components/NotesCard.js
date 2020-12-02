import { Paper, Typography, makeStyles, Divider, Fab } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note';
import { sampleNotes } from '../sampleData';
import AddNote from './AddNote';

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
  const [notes, setNotes] = useState([...sampleNotes]);
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
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
      <AddNote open={open} setOpen={setOpen} notes={notes} setNotes={setNotes} />
    </Paper>
  );
};

export default NotesCard;
