import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Switch,
  FormControlLabel,
  Chip,
} from '@material-ui/core';

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

const Bug = ({ archived, title, desc, priority, date }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Chip label="Urgent" color="secondary" />}
        title={title}
        subheader={date}
      />
      <CardContent>
        <Typography varient="body">{desc}</Typography>
        <div className={classes.footerContainer}>
          <FormControlLabel
            control={<Switch />}
            label={'Bug Squashed'}
            labelPlacement="start"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Bug;
