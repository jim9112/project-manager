import { Grid } from '@material-ui/core';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const ProjectCard = ({ name, desc, projKey, history }) => {
  const { setCurrentProject } = useContext(UserContext);

  const onClick = () => {
    setCurrentProject(projKey);
    history.push('/today');
  };

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card>
        <CardHeader title={name} />
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
    </Grid>
  );
};

export default ProjectCard;
