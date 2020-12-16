import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import useDeleteFromProjectSubCollection from '../utils/useDeleteFromProjectSubCollection';
import ConfirmationAlert from './ConfirmationAlert';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
  },
}));

const Note = ({ date, title, content, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const removeItem = useDeleteFromProjectSubCollection();

  const displayDate = new Date(date).toLocaleString();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={displayDate}
        action={
          <IconButton color="secondary" onClick={() => setOpen(true)}>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography varient="body">{content}</Typography>
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
    </Card>
  );
};

export default Note;
