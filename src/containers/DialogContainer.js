import { makeStyles, Dialog, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   minWidth: '300px',
  // },
  title: {
    textAlign: 'center',
  },
}));

const DialogContainer = ({ open, setOpen, title, NewComponentForm }) => {
  const classes = useStyles();
  return (
    <Dialog
      className={classes.root}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title">
      <DialogTitle className={classes.title} id="form-dialog-title">
        {title}
      </DialogTitle>
      <NewComponentForm setOpen={setOpen} />
    </Dialog>
  );
};

export default DialogContainer;
