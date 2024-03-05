import React from 'react'
import { FaCheck } from "react-icons/fa6";

export default function Features() {
  return (
    <div className='features'>
        <div className='features-title'>
            <h2>Our Features</h2>
            <p>We work hard every day to make life of our clients better and happier</p>
        </div>
        <div className='features-sharp'>
            <div className='features-item'>
                <div className='features-item-ico'>
                    <FaCheck />
                </div>
                <div className='features-item-title'>
                    <h2>Hight Quality</h2>
                    <p>We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience.</p>
                </div>
            </div>
            <div className='features-item'>
                <div className='features-item-ico'>
                    <FaCheck />
                </div>
                <div className='features-item-title'>
                    <h2>Good Support</h2>
                    <p>Our managers are always ready to answer your questions. You can call us at the weekends and at night. You can also visit our office for a personal consultation.</p>
                </div>
            </div>
            <div className='features-item'>
                <div className='features-item-ico'>
                    <FaCheck />
                </div>
                <div className='features-item-title'>
                    <h2>Individual Approach</h2>
                    <p>Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
