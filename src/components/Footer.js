import React, { forwardRef } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";


export default function Footer() {
    return (
      <footer id = 'contacts'>
          <div className='footer-sharp'>
            <h2>Contact us</h2>
            <p>You can ask questions and order an equipment by phone, mail or on our social networks</p>
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
