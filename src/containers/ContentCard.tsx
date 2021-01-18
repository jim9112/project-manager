import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 'calc(100vh - 120px )',
    width: '100%',
    paddingBottom: '1rem',
  },
}));

const ContentCard = ({ children }: any) => {
  const classes = useStyles();

  return <Paper className={classes.paper}>{children}</Paper>;
};

export default ContentCard;
