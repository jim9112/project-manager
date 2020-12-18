import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Switch,
  FormControlLabel,
  Chip,
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
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const Bug = ({ title, desc, priority, date, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const removeItem = useDeleteFromProjectSubCollection();
  const displayDate = new Date(date).toLocaleString();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Chip label={priority} color="secondary" />}
        title={title}
        subheader={displayDate}
        action={
          <IconButton color="secondary" onClick={() => setOpen(true)}>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography varient="body">{desc}</Typography>
      </CardContent>
      <ConfirmationAlert
        open={open}
        setOpen={setOpen}
        title={'Delete Note?'}
        message={`Do you want to delete the Bug: ${title}`}
        action={removeItem}
        param1={'Bugs'}
        param2={id}
      />
    </Card>
  );
};

export default Bug;
