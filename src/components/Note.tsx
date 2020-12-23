import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import DialogContainer from '../containers/DialogContainer';
import useDeleteFromProjectSubCollection from '../utils/useDeleteFromProjectSubCollection';
import ConfirmationAlert from './ConfirmationAlert';
import NewNoteForm from './NewNoteForm';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
  },
}));

interface Props {
  date: number;
  title: string;
  content: string;
  id: string;
}

const Note: React.FC<Props> = ({ date, title, content, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const removeItem = useDeleteFromProjectSubCollection();

  const displayDate = new Date(date).toLocaleString();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={displayDate}
        action={
          <div>
            <IconButton color="secondary" onClick={() => setOpen(true)}>
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" onClick={() => setEditOpen(true)}>
              <EditIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <ConfirmationAlert
        open={open}
        setOpen={setOpen}
        title={'Delete Note?'}
        message={`Do you want to delete the note: ${title}`}
        action={removeItem}
        param1={'Notes'}
        param2={id}
      />
      <DialogContainer
        open={editOpen}
        setOpen={setEditOpen}
        title="Edit Note"
        type={'Edit'}
        currentValues={{
          title: title,
          content: content,
          date: date,
        }}
        id={id}
        NewComponentForm={NewNoteForm}
      />
    </Card>
  );
};

export default Note;
