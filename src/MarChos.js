import React from 'react'
import './component/Marcho.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './images/download.jpeg';
// import image1 from './images/client1.jpg';
// import image2 from './images/client2.jpg'

function MarChos() {
    return (
        <div className="main-Mar">
        <Container fluid='lg'>
          <Row>
          <Col sm={5} className="left-Mar">
              <img src={image} alt="Descriptio " />
        </Col>
            <Col sm={6} className='right-Mar'>
              {/* <Col sm={7} className="well mt-5 mb-4 p-1"><h4>Welcome To The Mareting Booster</h4></Col> */}
              <Col sm={12} className="head p-1 mb-4 mt-5"><h2>Why Choose Marketing Booster For Your Digital Marketing Agency? </h2></Col>
              <Col sm={12} style={{ fontSize: '20px', color: 'white'}} className="Mar-Chos-para p-2 mb-4"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence  Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.</p></Col>
              {/* <Col sm={5} className="info p-2 mb-5"><a href="#action">Get A Free Proposal</a></Col> */}
            </Col>
          </Row>
        </Container>
      </div>
            )
}



export default MarChos
