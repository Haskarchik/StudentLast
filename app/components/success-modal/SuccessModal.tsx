'use client'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import './SuccessModal.scss';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}
export default function SuccessModal({ open, onClose: handleClose }: SuccessModalProps) {
  return (
    <Dialog
      PaperProps={{ className: 'success-modal' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{'Успіх'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {"Успішно надіслано! З вами зв'яжуться наші спеціалісти."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
