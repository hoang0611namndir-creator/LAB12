import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';



function BannerCarousel() {
  const imageStyle = {
    width: '100%',
    aspectRatio: '1920 / 530',
    objectFit: 'cover'
  };

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={imageStyle}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        <h1>FASHION COLLECTION 2026</h1>
        <b>Discover the latest fashion trends for 2026</b>
        </Carousel.Caption>
        
      </Carousel.Item>
      
      <Carousel.Item>
         <img
          className="d-block w-100"
          style={imageStyle}
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
          <h1>SUMMER SALE UP TO 50%</h1>
          <p>Enjoi special discounts on selected products</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={imageStyle}
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1> NEW ARRIVALS</h1>
          <p>Explore our newest clothing</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;