import { makeStyles, Dialog, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  NewComponentForm: any;
  type?: string;
  id?: string;
  currentValues?: {};
}

const DialogContainer: React.FC<Props> = ({
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
