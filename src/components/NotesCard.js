import { Paper, Typography, makeStyles, Divider, Fab } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note';
import { sampleNotes } from '../sampleData';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
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

  const handleOpen = () => {
    console.log('im open');
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
    </Paper>
  );
};

export default NotesCard;
