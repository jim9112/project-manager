import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    // minHeight: 500,
    // display: 'flex',
    height: 'calc(100vh - 120px )',
    // flex: 1,
    width: '100%',
    paddingBottom: '1rem',
  },
}));

const ContentCard = ({ children }) => {
  const classes = useStyles();

  return <Paper className={classes.paper}>{children}</Paper>;
};

export default ContentCard;
