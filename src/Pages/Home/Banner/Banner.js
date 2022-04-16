import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner from '../../../Images/banner/banner.jpg'
import banner1 from '../../../Images/banner/banner1.jpg'
import banner2 from '../../../Images/banner/banner2.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>STEP UP YOUR</h3>
                    <h1> <span className='text-danger'>FITNESS</span> WITH US</h1>
                    <p>Build Your Body and Fitness with professional Touch</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>STEP UP YOUR</h3>
                    <h1> <span className='text-danger'>FITNESS</span> WITH US</h1>
                    <p>Build Your Body and Fitness with professional Touch</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>STEP UP YOUR</h3>
                    <h1> <span className='text-danger'>FITNESS</span> WITH US</h1>
                    <p>Build Your Body and Fitness with professional Touch</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;