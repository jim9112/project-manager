import { Grid } from '@material-ui/core';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  IconButton,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmationAlert from './ConfirmationAlert';
import useArchiveProject from '../utils/useArchiveProject';
import DialogContainer from '../containers/DialogContainer';
import NewProjectForm from './NewProjectForm';

interface Props {
  name: string;
  desc: string;
  repo?: string;
  projKey: string;
  id: string;
  history: {
    push: (location: string) => void;
  };
}

const ProjectCard: React.FC<Props> = ({
  name,
  desc,
  repo,
  projKey,
  history,
  id,
}) => {
  const { setCurrentProject }: any = useContext(UserContext);
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const archivePropject = useArchiveProject();
  const onClick = () => {
    setCurrentProject({ projKey: projKey, repo: repo, name: name });
    history.push(`/projects/${projKey}`);
  };

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card>
        <CardHeader
          title={name}
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
        <Divider />
        <CardContent>
          <Typography variant="body1">{desc}</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={onClick}>
            Open
          </Button>
        </CardActions>
      </Card>
      <ConfirmationAlert
        open={open}
        setOpen={setOpen}
        title={'Delete Bug?'}
        message={`Do you want to archive the project: ${name}`}
        action={archivePropject}
        param1={id}
      />
      <DialogContainer
        open={editOpen}
        setOpen={setEditOpen}
        title="Edit Project"
        type={'Edit'}
        currentValues={{
          name: name,
          desc: desc,
          repo: repo,
        }}
        id={id}
        NewComponentForm={NewProjectForm}
      />
    </Grid>
  );
};

export default ProjectCard;
