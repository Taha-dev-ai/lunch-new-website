import React from 'react'
import './component/contac.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './images/download.jpeg';
import client1 from './images/client1.jpg';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import 'animate.css';
import Swal from 'sweetalert2'

function Contact() {
  const onSubmi = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ba5b6bf0-b3b6-4d69-98d5-4165e562a5aa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "success!",
            text: "Message Send Seccessfully",
            icon: "success"
          });
    }
};
  return (
    <div className="contact-info">
      {/* ----------------------------------------HERO SECTION---------------------------- */}
      <Container fluid="md" >
        <Row>
          <Col sm={8} className='left'>
            <Col sm={11} className="well mt-5 mb-4 p-2 animate__animated animate__fadeInUp"><h4>Supercharge Your Digital Destiny</h4></Col>
            <Col sm={12} className="head-h p-1 mb-4 animate__animated animate__fadeInLeft"><h1>Contact Us</h1></Col>
            <Col sm={11} style={{ fontSize: '20px', }} className="para p-2 mb-4 animate__animated animate__fadeInDown"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.</p></Col>
            <Col sm={6} className="info p-2 mb-5"><a href="#action">Get A Free Proposal</a></Col>
          </Col>
          <Col sm={4} className="right para p-2 mb-4 animate__animated animate__fadeInRight">
            <img src={image} alt="Descriptio " />
          </Col>
        </Row>

        {/* ---------------------------------------panel2--------------------------------------- */}
        <Row className="justify-content-center mb-4 mt-4">
          <Col sm={3} className=" testimonial-card-panel">
            <Col className='testimonial-card-head'>
              <img src={client1} alt="Suncrop Group" className="testimonial-logo" />
              <h5>Pakistan Office Location</h5>
            </Col>
            <p>Remarkable impact! Shahrukh  Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.</p>

          </Col>
          <Col sm={3} className="testimonial-card-panel">
            <Col className='testimonial-card-head'>
              <img src={client1} alt="Patron" className="testimonial-logo" />
              <h5>Contact With Us</h5>
            </Col>
            <Col className='mt-4'>
              <p>+92 322 2205444</p>
              <p>+1 628345 4009</p>
              <p>info@devbolts.com</p>
            </Col>
          </Col>
          <Col sm={3} className="testimonial-card-panel">
            <Col className='testimonial-card-head'>
              <img src={client1} alt="Exin Group" className="testimonial-logo" />
              <h5>USA Office Location</h5>
            </Col>
            <p>Remarkable impact! Shahrukh  Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.</p>
          </Col>
        </Row>
        {/* ----------------------------------------------------------------panel3-------------------------------------- */}
        {/* <div>
          <form className="form mt-5 mb-5">
            <Col className="text-center mb-4">
              <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <DragHandleIcon style={{ fontSize: '50px', color: '#26ff00' }} />
                <h6 className="text-yellow">TESTIMONIAL</h6>
              </Col>
              <h2 className="text-">What People Say About Us</h2>
            </Col>
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Firstname</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Lastname</span>
            </label>
            <label>
              <input className="input" type="email" placeholder="" required="" />
              <span>Email</span>
            </label>
            <label>
              <input className="input" type="password" placeholder="" required="" />
              <span>Password</span>
            </label>
            <label>
              <input className="input" type="password" placeholder="" required="" />
              <span>Confirm password</span>
            </label>
            <button className="submit">Submit</button>
          </form>
        </div> */}



        {/* --------------------------------------------contact page------------------------------------ */}

        <div class="container-fluid-lg pt-5  contact">
          {/* <div class="container "> */}
            <div class="section-title text-center mb-3">
              <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <DragHandleIcon style={{ fontSize: '50px', color: '#a4fd25' }} />
                <h5 className="icon-text">Contact Us</h5>
              </Col>
              {/* <h4 class="text-primary text-uppercase" style="letter-spacing: 5px;">Contact Us</h4> */}
              {/* <h4 class="text-primary text-uppercase" style={{letterSpacing:'5px'}}>Contact Us</h4> */}
              <h1 class=" mt-3 ">We Are Always Ready For Your Solution</h1>
            </div>
            <div class="row px-3 pb-2 mt-5 contect-info-phone">
              <div class="col-sm-4 text-center mb-3 contect-icon">
                <LocationOnIcon />
                <h4 class="font-weight-bold ">Address</h4>
                <p>123 Street, New York, USA</p>
              </div>
              <div class="col-sm-4 text-center mb-3 contect-icon">
                <PhoneIcon />
                <h4 class="font-weight-bold">Phone</h4>
                <p>+012 345 6789</p>
              </div>
              <div class="col-sm-4 text-center mb-3 contect-icon">
                <EmailIcon />
                <h4 class="font-weight-bold">Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pb-5">
                {/* <iframe style="width: 100%; height: 443px;" */}
                <iframe title="Unique of the Iframe" style={{ width: '100%', height: '483px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <div class="col-md-6 pb-5">
                <div class="contact-form">
                  <div id="success"></div>
                  <form name="sentMessage" onSubmit={onSubmi} id="contactForm" novalidate="novalidate">
                    <div class="control-group">
                      <input type="text" class="form-control bg-transparent p-4" id="name" placeholder="Your Name" name="name"
                        required="required" data-validation-required-message="Please enter your name" />
                      <p class="help-block "></p>
                    </div>
                    <div class="control-group">
                      <input type="email" class="form-control bg-transparent p-4" id="email" placeholder="Your Email" name="email"
                        required="required" data-validation-required-message="Please enter your email" />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                      <input type="text" class="form-control bg-transparent p-4" id="subject" placeholder="Subject" name="service"
                        required="required" data-validation-required-message="Please enter a subject" />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                      <textarea class="form-control bg-transparent py-3 px-4" rows="5" id="message" placeholder="Message" name="message"
                        required="required" data-validation-required-message="Please enter your message"></textarea>
                      <p class="help-block text-danger"></p>
                    </div>
                    <div>
                      <button class="button font-weight-bold py-3 px-5" type="submit" id="sendMessageButton">Send
                        Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </Container>
    </div>
  )
}

export default Contact
