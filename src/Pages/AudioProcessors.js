import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Items from "../components/Items"

export default class AudioProcessors extends Component {
    render() {
        return (
            <div className = 'wrapper'>
                <div className = 'container'>
                    <Header />  
                    <Items items = {this.props.items} />
                    <Footer />
                </div>
            </div>
          )
    }
}
