import React from 'react'
import './component/Aboutt.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './images/download.jpeg';
import client1 from './images/client1.jpg';
import DragHandleIcon from '@mui/icons-material/DragHandle';


function About() {
  return (
    <div className="about">
      {/* ----------------------------------------HERO SECTION---------------------------- */}
      <Container fluid="md" >
      <Row>
          <Col sm={8} className='left'>
            <Col sm={11} className="well mt-5 mb-4 p-2 animate__animated animate__fadeInUp"><h4>Supercharge Your Digital Destiny</h4></Col>
            <Col sm={12} className="head-h p-1 mb-4 animate__animated animate__fadeInLeft"><h1>About Us</h1></Col>
            <Col sm={11} style={{ fontSize: '20px', }} className="para p-2 mb-4 animate__animated animate__fadeInDown"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.</p></Col>
            <Col sm={6} className="info p-2 mb-5"><a href="#action">Get A Free Proposal</a></Col>
          </Col>
          <Col sm={4} className="right para p-2 mb-4 animate__animated animate__fadeInRight">
            <img src={image} alt="Descriptio " />
          </Col>
        </Row>
        {/* ----------------------------------------panel2-------------------------------- */}
        <Row>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="me-3">
                  <img src={client1} alt="Team Collaboration" className="img-fluid" />
                </div>
                {/* <div className="d-flex flex-column justify-content-center align-items-center bg-warning text-dark p-4">
            <h2>160+</h2>
            <p>Get National Award</p>
          </div> */}
                <div className="image ms-3">
                  <img src={client1} alt="Team Collaboration" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 panel2-about-info">
                <Col style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px' , color:'#a4fd25'}}/>
                        <h5 className="icon-text">MARETING BOOSTER COMPANY</h5>
                </Col>
                {/* <h5 className="text-warnin mb-4">MARETING BOOSTER COMPANY</h5> */}
                <h1 className="display-6 mb-4">Where Smart Minds Unite To Spark The Digital World</h1>
                <p className="lead">
                  Marketing booster is a dynamic digital powerhouse that charges your brand's online identity. A results-driven marketing agency that thrives on turning the clients into partners.
                </p>
                <button className="button mt-4">READ MORE</button>
              </div>
            </div>
          </div>
        </Row>
        {/* -----------------------------------------------panel3---------------------------------- */}
        <Row>
          <div className="container py-5" >
            <div className="row" >
              <div className="col-md-6 about-panel3-info">
              <Col style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px' , color:'#a4fd25'}}/>
                        <h5 className="icon-text">OUR ULTIMATE GOAL</h5>
                </Col>
                {/* <h5 className="text-warning">OUR ULTIMATE GOAL</h5> */}
                <h1 className="display-6 mt-3">Best Company Especially In Business Branding</h1>
                <p className="lead mt-4">
                  Devbolts LLC aims to skyrocket your brand, taking it to the new heights of success. Our committed team of experts offer you their quick and refined digital services that are second-to-none. We not only boost your business but we increase and retain the customers as well. We combine innovation and technology together to make strategies that go perfect with your brand’s needs. So, take a little rest while we serve you the best.
                </p>
                <div className="d-flex mt-5 panel3-buttom-info">
                  <div className="me-5">
                    <h2>59k</h2>
                    <p>Project Completed Last Years</p>
                  </div>
                  <div>
                    <h2>16k</h2>
                    <p>Happy Customer Worldwide</p>
                  </div>
                </div>
                <button className="button mt-4">DISCOVER MORE</button>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <img src={client1} alt="Business Branding" className="img-fluid" />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default About
