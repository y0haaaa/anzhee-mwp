import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";


export default function footer() {
    return (
      <footer>
          <div className='footer-sharp'>
            <h2>Contact us</h2>
            <p>You can ask questions and order an equipment by phone, mail or on our social networks</p>
            <p className='footer-contact'>+971 050 743 2895</p>
            <p className='footer-contact'>SALE@ANZHEE.AE</p>
          </div>
          <div className='footer-ico'>
            <FaVk />
            <FaTelegram />
            <FaYoutube />
          </div>
      </footer>
    )
}
