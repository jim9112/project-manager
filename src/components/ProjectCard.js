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

const ProjectCard = ({ name, desc }) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card>
        <CardHeader title={name} />
        <Divider />
        <CardContent>
          <Typography variant="body1">{desc}</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            Open
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
