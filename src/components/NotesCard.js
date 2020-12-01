import { Paper, Typography, makeStyles, Divider } from '@material-ui/core';
import { useState } from 'react';
import Note from './Note';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 500,
    width: '100%',
  },
  title: {
    textAlign: 'center',
  },
}));

const NotesCard = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState([
    {
      archived: false,
      date: 'a date',
      title: 'My Note',
      content: 'Here is my note. Its such a great note',
    },
    {
      archived: false,
      title: 'Nother Note',
      date: 'a date',
      content: 'Here is another note. It is so much better than the last one',
    },
  ]);

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Notes
      </Typography>
      <Divider />
      {notes.map((note) => (
        <Note
          archived={note.archived}
          date={note.date}
          title={note.title}
          content={note.content}
        />
      ))}
    </Paper>
  );
};

export default NotesCard;
