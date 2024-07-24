'use client'
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import "./SocialNetworks.scss";
import { socialNetworks } from "./networks";
import Link from "next/link";

export default function SocialNetworks({social_network}:{social_network:string}) {
  
  return (
    <div className="social-networks-wrapper">
      <div className="social-networks-title">{social_network}</div>
      <div className="social-networks-list">
        <a
          href="https://t.me/student_helper_official"
          target="_blank"
          rel="noreferrer"
        >
          <div className="logo-circle">
            <FaTelegramPlane color="6b69e7" size={30} className="logo-footer" />
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@student_helper_official?_t=8fNJV8RjsF4"
          target="_blank"
          rel="noreferrer"
        >
          <div className="logo-circle">
            <FaTiktok color="6b69e7" size={30} className="logo-footer" />
          </div>
        </a>
        <a
          href="https://instagram.com/student_helper_official?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noreferrer"
        >
          <div className="logo-circle">
            <FaInstagram size={30} color="6b69e7" className="logo-footer" />
          </div>
        </a>
      </div>
    </div>
  );
}
