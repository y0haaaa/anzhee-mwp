import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../img/slider1.jpeg'
import slider2 from '../img/slider2.jpeg'
import { CarouselCaption } from 'react-bootstrap'


export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-90' 
                    src = { slider1 }
                    alt='Slider'
                    />
                <CarouselCaption>PROFESSIONAL STAGE LIGHTING & SOUND EQUIPMENT</CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-90' 
                    src = { slider2 }
                    alt='Slider2'
                    />
                <CarouselCaption>FOR THEATRES, CONCERT HALLS, CULTURAL VENUES</CarouselCaption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
