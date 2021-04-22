import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default function slider() {
    return (
        <div className="w-100 p-0 m-0 fadeIn">
            <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/slide-home-1.jpg?v=1618415673"
      alt="First slide"
      className="d-block mx-auto"
    />




    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/slide-home-2.jpg?v=1618415674"
      alt="Second slide"
      className="d-block mx-auto"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/slide-home-3_15b6e4f6-77f4-471d-abbe-001249cc2df6.jpg?v=1618421215"
      alt="Third slide"
      className="d-block mx-auto"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
}




