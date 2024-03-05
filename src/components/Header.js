import React, { useState } from 'react'


export default function Header() {

    return (
        <header>
            <div className='top-header'>
                <div className = 'logo'>
                    <a href = 'https://anzhee.ru/' target="_blank">
                        <img src = './img/anzee_blue_logo.png'></img>
                    </a>
                </div>
                <div className='menu'>
                    <ul className = 'nav'>
                        <li>Main</li>
                        <li>Catalogue</li>
                        <li>Service</li>
                        <li>Contacts</li>
                    </ul>
                    <div className='phone'>

                        <div className='phone-number'>+971 050 743 2895</div>
                        <div className='phone-mail'>SALE@ANZHEE.AE</div>
                    </div>
                </div>
                
            </div>
            <div className = 'presentation'></div>
        </header>
    )
}
