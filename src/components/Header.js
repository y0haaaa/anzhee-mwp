import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import {Link} from 'react-router-dom'


export default function Header() {
    const [isOpen, setOpen] = useState();
    
    return (
        <>
            <header>
                <div className='top-header'>
                    <div className = 'logo'>
                        <a href = '/' target="_blank">
                            <img src = './img/anzee_blue_logo.png' alt='logo'></img>
                        </a>
                    </div>
                    <div className={`menu ${isOpen ? 'active' : ''}`}>
                        <ul className = 'nav'>
                            <li>
                                <a href='/'>Main</a>
                            </li>
                            <li>
                                <a href={'/' + '#catalogue'}>Catalogue</a>
                            </li>
                            <li>
                                <Link to = '/other'>
                                    <a hr1ef='/other'>About us</a>
                                </Link>
                            </li>
                            <li>
                                <a href='#contacts'>Contacts</a>
                            </li>
                        </ul>
                        <div className='phone'>
                            <div className='phone-number'>+971 050 743 2895</div>
                            <div className='phone-mail'>SALE@ANZHEE.AE</div>
                        </div>
                    </div>
                    <FaBars className='menu-button' onClick={()=> setOpen(!isOpen)}  />
                    
                </div>
                
            </header>
            
        </>
    )
}
