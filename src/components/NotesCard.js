import { Paper, Typography, makeStyles, Divider, Fab } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note';
import DialogContainer from '../containers/DialogContainer';
import NewNoteForm from '../components/NewNoteForm';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
import Spinner from './Spinner';

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
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Notes');

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h4">
        Notes
      </Typography>
      <Divider />
      {!loading ? (
        output.map((note, i) => (
          <Note
            key={i}
            archived={note.archived}
            date={note.date}
            title={note.title}
            content={note.content}
          />
        ))
      ) : (
        <Spinner />
      )}
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
