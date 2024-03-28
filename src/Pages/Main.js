import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About"
import Description from "../components/Description"
import Product from "../components/Product"
import Features from "../components/Features"
import Projects from "../components/Projects"
import CarouselBox from "../components/CarouselBox"
import Items from "../components/Items"
import Categories from "../components/Сategories"
import Presentation from '../components/Presentation'

export default class Main extends Component {
    
    
    render() {
        return (
        <div className = 'wrapper'>
            <div className = 'container'>
                
                <Header />
                <Presentation />
                <Description />

                <Features />
                <Categories group = {this.props.group} onAdd={this.props.onAdd}/>
                <Projects />
                <Footer />

            </div>
        </div>
        );
    };
}
