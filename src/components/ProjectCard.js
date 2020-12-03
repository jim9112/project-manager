import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';

const ProjectCard = () => {
  return (
    <Card>
      <CardHeader title="Project One" />
      <Divider />
      <CardContent>
        <Typography variant="body1">
          Here is some information about my Project.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained">
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
