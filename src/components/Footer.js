import React, { forwardRef } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";


export default function Footer() {
    return (
      <footer id = 'contacts'>
          <div className='footer-sharp'>
            <h2>CONTACT US</h2>
            <p>Please contact us by phone, mail or on our social media if you have any questions regarding our equipment or to make and order</p>
            <p className='footer-contact'>+971 050 743 2895</p>
            <p className='footer-contact'>SALE@ANZHEE.AE</p>
          </div>
          <div className='footer-ico'>
            <a href = 'https://vk.com/anzhee_light?from=search'><FaVk /></a>
            <a href = 'https://t.me/Anzhee'><FaTelegram /></a>
            <a href = 'https://www.youtube.com/@Anzheelighting'><FaYoutube /></a>
          </div>
      </footer>
    )
}
