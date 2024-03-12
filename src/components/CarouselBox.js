import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../img/slider1.jpeg'
import slider2 from '../img/slider2.jpeg'


export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100' 
                    src = { slider1 }
                    alt='Slider'
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100' 
                    src = { slider2 }
                    alt='Slider2'
                    />
            </Carousel.Item>
        </Carousel>
    )
  }
}
