import React from 'react'
import './component/Herosect.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './images/client1.jpg';
import 'animate.css';

function Herosec() {
  return (
    <div className="home-hero">
      <Container fluid="lg" >
      <Row>
          <Col sm={8} className='left'>
            <Col sm={7} className="home-well mt-5 mb-4 p-2 animate__animated animate__fadeInUp"><h4>WELCOME MARKETING BOOSTER</h4></Col>
            <Col sm={12} className="head-h p-1 mb-2 animate__animated animate__fadeInLeft"><h1>Home</h1></Col>
            <Col sm={11} style={{ fontSize: '20px'}} className="home-hro-para p-2 mb-4 animate__animated animate__fadeInDown"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.</p></Col>
            <Col md={4} className="hero-info p-2 mb-5"><a href="#action">Get A Free Proposal</a></Col>
          </Col>
          <Col sm={4} className="right para p-2 mb-4 animate__animated animate__fadeInRight">
            <img src={image} alt="Descriptio " />
          </Col>
      {/* -------------------------------------------panel2----------------------------------- */}
        </Row>

      </Container>
    </div>
  )
}

export default Herosec
