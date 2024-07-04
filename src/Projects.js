import React from 'react'
import './component/Proje.css'
import Carousel from 'react-bootstrap/Carousel';
import client1 from './images/client1.jpg'

function Projects() {
  return (
<div className="carousel-container mt-5">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={client1}
            alt="Graphic Designing"
          />
          <Carousel.Caption>
            <h3>Graphic Designing</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={client1}
            alt="Website Design"
          />
          <Carousel.Caption>
            <h3>Website Design</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={client1}
            alt="Video Editing"
          />
          <Carousel.Caption>
            <h3>Video Editing</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <button className="carousel-control-prev" type="button"> */}
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
      {/* </button> */}
      {/* // <button className="carousel-control-next" type="button"> */}
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
      {/* </button> */}
    </div>
  )
}

export default Projects


