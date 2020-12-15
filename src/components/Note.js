import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
  },
}));

const Note = ({ archived, date, title, content }) => {
  const classes = useStyles();

  const displayDate = new Date(date).toLocaleString();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={displayDate}
        action={
          <FormControlLabel
            control={<Switch />}
            label={'Archive'}
            labelPlacement="start"
          />
        }
      />
      <CardContent>
        <Typography varient="body">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
