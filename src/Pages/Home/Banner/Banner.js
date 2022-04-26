/** @format */

import React from "react";
import "./Banner.css";
import slider1 from "../../../images/slider-1.jpg";
import slider2 from "../../../images/slider-2.jpg";
import slider3 from "../../../images/slider-3.jpg";
import { Carousel, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel fade variant='dark'>
        <Carousel.Item>
          <img className='d-block w-100' src={slider2} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Capture Your Beautiful Moments</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={slider3} alt='Second slide' />
          <Carousel.Caption>
            <h3 className='slideColor'>Second slide label</h3>
            <p className='slideColor'>Capture Your Beautiful Moments</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={slider1} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Capture Your Beautiful Moments</p>

            {/*             <h1>Capture Your Beautiful Moments</h1>
            <Button variant='outline-dark'>Buy Now</Button> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
