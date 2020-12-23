import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

interface Props {
  title: string;
  message: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  action: (param1: string, param2: string) => void;
  param1: string;
  param2: string;
}

const ConfirmationAlert: React.FC<Props> = ({
  title,
  message,
  open,
  setOpen,
  action,
  param1,
  param2,
}) => {
  const handleAction = () => {
    action(param1, param2);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleAction}>
          Confirm
        </Button>
        <Button color="primary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationAlert;
