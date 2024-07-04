import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function NavLogo() {

return (
  <>
    {/* <Navbar style={{ backgroundColor: '#a4fd25', height:'50px'}}> */}
    <Navbar style={{ backgroundColor: '#a4fd25', height:'50px'}}>
      <Container>
        <div className="icon-container" style={{ marginLeft: 'auto' }}>
          <a href="http://www.facebook.com/marketingbooster.tech" target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={{ marginRight: '20px' ,fontSize: '1.8rem',color:'white'  }} />
          </a>
          <a href="https://www.linkedin.com/company/90827404/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ marginRight: '20px' ,fontSize: '1.8rem' ,color:'white' }} />
          </a>
          <GitHubIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}}/>
          <a href="https://www.instagram.com/marketingbooster.tech/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          <a href="https://wa.me/92186064657" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" target="_blank" rel="noopener noreferrer">
          <LocationOnIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          
          {/* <WhatsAppIcon style={{ marginRight: '10px' ,fontSize: '1.8rem' ,color:'white' }} /> */}
          {/* <LocationOnIcon style={{ marginRight: '10px' ,fontSize: '1.8rem' ,color:'white' }} /> */}
        </div>
      </Container>
    </Navbar>
    </>
  )
}

export default NavLogo
