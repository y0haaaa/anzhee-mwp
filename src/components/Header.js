import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import {Link} from 'react-scroll'

export default function Header() {
    const [isOpen, setOpen] = useState();
    

    
    return (
        <header>
            <div className='top-header'>
                <div className = 'logo'>
                    <a href = 'https://anzhee.ru/' target="_blank">
                        <img src = './img/anzee_blue_logo.png'></img>
                    </a>
                </div>
                <div className={`menu ${isOpen ? 'active' : ''}`}>
                    <ul className = 'nav'>
                        <li><Link to='main'>Main</Link></li>
                        <li><Link to='catalogue'>Catalogue</Link></li>
                        <li><Link to='service'>Service</Link></li>
                        <li><Link to='contacts'>Contacts</Link></li>
                    </ul>
                    <div className='phone'>
                        <div className='phone-number'>+971 050 743 2895</div>
                        <div className='phone-mail'>SALE@ANZHEE.AE</div>
                    </div>
                </div>
                <FaBars className='menu-button' onClick={()=> setOpen(!isOpen)}  />
                
            </div>
        </header>
    )
}
