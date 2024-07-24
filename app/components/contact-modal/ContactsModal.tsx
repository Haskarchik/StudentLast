'use client'
import React, { useState } from 'react'
import Button from '../button/Button'
import ContactModal from './ContactModal'

type Props = {
    get_touch:string,
    social_network:string,
    contact_info:string,
    connect_with_us:string
}

const ContactsModal = (props: Props) => {
    const [modalActive,setModalActive]=useState<boolean>(false); 
    
    const openModal = () => {
        setModalActive(true);
    };
    const closeModal = () => {
    setModalActive(false);
    };
  return (
    <>
        <Button text={props.get_touch} onClick={openModal} />

        <ContactModal connect_with_us={props.connect_with_us} contact_info={props.contact_info} social_network={props.social_network} open={modalActive} handleClose={closeModal} />
</>
  )
}

export default ContactsModal