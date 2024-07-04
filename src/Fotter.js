import React from 'react'
import { useState, useEffect } from 'react'
import './component/Foter.css'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Foter.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { isVisible } from '@testing-library/user-event/dist/utils';


// function Fotter() {
const Fotter = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const togglevisible = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
      else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', togglevisible);
    return () => window.removeEventListener('scroll', togglevisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <Container className='foter'>
        <Row className="foot mb-4">
          <Col md={4} className="panel1 mb-5">
            <h1>Location</h1>
            <p>5-A Citi Housing Phase 1 Bosan Road, Multan, Pakistan</p>
            <h4 className='pb-3'>Follow Us On:</h4>
            {/* <Col style={{ display: 'flex', flexDirection: 'row', fontSize: 'large', gap: '10px' }} className='phono'> */}
            <Col style={{ display: 'flex', flexDirection: 'row', fontSize: 'large', }} className='phono'>
                            <a href="http://www.facebook.com/marketingbooster.tech" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: 'white' }} />
                            </a>
                            <a href="https://www.linkedin.com/company/90827404/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: 'white' }} />
                            </a>
                            <a href="https://www.instagram.com/marketingbooster.tech/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: 'white' }} />
                            </a>
                            <a href="https://wa.me/92186064657" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: 'white' }} />
                            </a>
                            <GitHubIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: 'white' }} />
                        </Col>
            {/* <Col></Col> */}
          </Col>
          <Col md={3} className=" panel2 mb-5" style={{ display: 'flex', flexDirection: 'column' }}>
              <h1>Quick Links</h1>
              <NavLink to="/marketingservices" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>SERVICES</NavLink>
              <NavLink to="/projects" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>PROJECTS</NavLink>
              <NavLink to="/Ourteam" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>OUR TEAM</NavLink>
            <NavLink to="/blog" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>BLOG</NavLink>
            <NavLink to="/blog" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>FAQ'S</NavLink>
            {/* <a href="#active">FAQ'S</a> */}
          </Col>
          <Col md={5} className="panel2 mb-5" style={{ display: 'flex', flexDirection: 'column' }}>
              <h1>Important Links</h1>
            <NavLink to="/" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>HOME</NavLink>
            <NavLink to="/aboutus" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>ABOUT US</NavLink>
            <NavLink to="/contactus" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>CONTACT US</NavLink>
            <NavLink to="/projects" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>PROJECTS</NavLink>
            <NavLink to="/Contentwriting" className="nav-link mx-lg-2" activeClassName="active" onClick={scrollToTop}>CONTENT WRITING</NavLink>
          </Col>
          <Col className='upward'>
            <button className='back-to-top'
              onClick={scrollToTop}
              style={{
                display: isVisible ? 'block' : 'none',
                opacity: isVisible ? '1' : '0',                
                transition: 'opacity 0.5s',
              }}
            ><KeyboardDoubleArrowUpIcon /></button>
          </Col>
        </Row>
      </Container>
      <Row className='down-foot'>
        <p>© 1996-2024, Marketingboster.com, Inc. or its affiliates</p>
      </Row>
    </footer>
  )
}

export default Fotter