import React from 'react';
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import DialogContainer from '../containers/DialogContainer';
import useDeleteFromProjectSubCollection from '../utils/useDeleteFromProjectSubCollection';
import ConfirmationAlert from './ConfirmationAlert';
import NewBugForm from './NewBugForm';

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

interface Props {
  title: string;
  desc: string;
  priority: string;
  date: number;
  id: string;
}

const Bug: React.FC<Props> = ({ title, desc, priority, date, id }) => {
  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const removeItem = useDeleteFromProjectSubCollection();

  const displayDate = new Date(date).toLocaleString();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Chip label={priority} color="secondary" />}
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
        <Typography variant="body1">{desc}</Typography>
      </CardContent>
      <ConfirmationAlert
        open={open}
        setOpen={setOpen}
        title={'Delete Bug?'}
        message={`Do you want to delete the Bug: ${title}`}
        action={removeItem}
        param1={'Bugs'}
        param2={id}
      />
      <DialogContainer
        open={editOpen}
        setOpen={setEditOpen}
        title="Edit Bug"
        type={'Edit'}
        currentValues={{
          title: title,
          desc: desc,
          date: date,
          priority: priority,
        }}
        id={id}
        NewComponentForm={NewBugForm}
      />
    </Card>
  );
};

export default Bug;
