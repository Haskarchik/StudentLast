'use client'
import './ContactInfo.scss';
//import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
//import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { contactInfo } from '../../data/contactInfo';
import Image from 'next/image';
export default function ContactInfo({contact_info}:{contact_info:string}) {
  return (
    <div className="contact-wrapper">
      <div className="contact-title">{contact_info}</div>
      <div className="contact-item">
        <IoMailSharp size={30} color="#6b69e7" />&nbsp;
        <a type="email" href={`mailto:${contactInfo.email}`} className="contact-content">
          {contactInfo.email}
        </a>
      </div>
      <div className="contact-item">
        <FaPhoneAlt size={30} color='#6b69e7' />&nbsp;
        <a type="tel" href={`tel:${contactInfo.phone}`} className="contact-content">
          {contactInfo.phone}
        </a>
      </div>
    </div>
  );
}
