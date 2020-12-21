import { Typography, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

const CardHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Divider />
    </>
  );
};

export default CardHeader;
