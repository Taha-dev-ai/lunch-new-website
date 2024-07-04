/*
import React from 'react'
import './component/Responc.css'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import client1 from './images/client1.jpg';

function Reponce() {
    return (


            <div className=".testimonial-section">
        <Container>
            <Row>
                <Col md={12} className="right-res d-flex align-items-center">
                    <DragHandleIcon />
                    <h5>TESTIMONIAL</h5>
                </Col>
                <Col md={12} className="right-res d-flex align-items-center">
                    <h1>What People Say About Us</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="left-res d-flex justify-content-between align-items-center">                  
                    <div className="res-icon d-flex">
                        <ArrowBackIosIcon className="arrow-icon"/>
                        <ArrowForwardIosIcon className="arrow-icon"/>
                    </div>
                </Col>
            </Row>
        </Container>
        <Row sm={2} xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>    
          <Card style={{ width: '18rem', marginTop:'40px' }}>
            <Card.Img variant="top" src={client1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>                                                                                                                                               </Col>
        ))}
      </Row>
    </div>
    )
}

export default Reponce

*/


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Responc.css'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import client1 from './images/client1.jpg';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const Testimonials = () => {
    return (
        <div className="responce-section">
            <Container>
                <Row className="text-center mb-4">
                    <Col>
                    <Col style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px' , color:'#a4fd25'}}/>
                        <h5 className="icon-text">TESTIMONIAL</h5>
                    </Col>
                        <h2 className="rep-heading mt-3">What People Say About Us</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col md={3} className=" testimonial-car">
                        <Col className='testimonial-card-head'>
                        <img src={client1} alt="Suncrop Group" className="testimonial-logo" />
                        <h5>Suncrop Group</h5>
                        </Col>
                        <p>Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.</p>
                        <div className="testimonial-rate">★★★★★</div>
                    </Col>
                    <Col md={3} className=" testimonial-car">
                        <Col className='testimonial-card-head'>
                        <img src={client1} alt="Patron" className="testimonial-logo" />
                        <h5>Patron</h5>
                        </Col>
                        <p>Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.</p>
                        <div className="testimonial-rate">★★★★★</div>
                    </Col>
                    <Col md={3} className=" testimonial-car">
                        <Col className='testimonial-card-head'>
                        <img src={client1} alt="Exin Group" className="testimonial-logo" />
                        <h5>Exin Group</h5>
                        </Col>
                        <p>Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.</p>
                        <div className="testimonial-rate">★★★★★</div>
                    </Col>
                </Row>
                {/* <Row className="text-center">
                    <Col>
                        <ArrowBackIosIcon className="testimonial-nav" />
                        <ArrowForwardIosIcon className="testimonial-nav" />
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default Testimonials;
