import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/Product'
import About from '../components/About'

export default function Other() {
    return (
        <div className = 'wrapper'>
            <div className = 'container'>
                <Header />
                <About />
                <Product />
                <Footer />
            </div>
        </div>
        
  )
}
