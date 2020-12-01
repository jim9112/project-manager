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

const Bug = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Chip label="Urgent" color="secondary" />}
        title="Some bug name"
        subheader="a date"
      />
      <CardContent>
        <Typography varient="body">Bug description goes here</Typography>
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
