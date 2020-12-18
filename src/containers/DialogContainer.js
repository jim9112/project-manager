import { makeStyles, Dialog, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

const DialogContainer = ({
  open,
  setOpen,
  title,
  NewComponentForm,
  type,
  id,
  currentValues,
}) => {
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
      <NewComponentForm
        setOpen={setOpen}
        type={type}
        id={id}
        currentValues={currentValues}
      />
    </Dialog>
  );
};

export default DialogContainer;
