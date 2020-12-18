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

const Bug = ({ title, desc, priority, date }) => {
  const classes = useStyles();
  const displayDate = new Date(date).toLocaleString();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Chip label={priority} color="secondary" />}
        title={title}
        subheader={displayDate}
        action={
          <IconButton color="secondary">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography varient="body">{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default Bug;
