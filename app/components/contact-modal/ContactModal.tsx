import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import './ContactModal.scss';
import SocialNetworks from '../social-networks/SocialNetworks';
import ContactInfo from '../contact-info/ContactInfo';
interface ConnectModalProps {
  open: boolean;
  handleClose: () => void;
  social_network:string,
  contact_info:string,
  connect_with_us:string
}

export default function ContactModal({ open, handleClose, social_network,contact_info,connect_with_us }: ConnectModalProps) {

  return (
    <Dialog
      PaperProps={{ className: 'contact-modal' }}
      open={open}
      onClose={handleClose}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" className="contact-modal-title">
        {connect_with_us}
      </DialogTitle>
      <DialogContent>
        <ContactInfo contact_info={contact_info} />
        <SocialNetworks social_network={social_network} />
      </DialogContent>
    </Dialog>
  );
}
