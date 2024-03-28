import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Items from "../components/Items"

export default class MovingHead extends Component {
   
    render() {
        console.log(this.props.category)
        console.log(this.props.items.filter(item => item.category === this.props.category.toString()))
        return (
            <div className = 'wrapper'>
                <div className = 'container'>
                    <Header />  
                    <Items items = {this.props.items.filter(item => item.category === this.props.category.toString())}/>
                    <Footer />
                </div>
            </div>
          )
    }
    
}
