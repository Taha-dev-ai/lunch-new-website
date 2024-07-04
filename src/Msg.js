import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Mesg.css'
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Swal from 'sweetalert2'

function Msg() {
    const onSubmit = async (event) => {
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
        <div className="msg-section">
            <Container>
                <Row className=" mb-4">
                    <Col md={5} className=" testimonial-card">
                        <Col className='testimonial-card-head'>
                        </Col>
                        <p>TRVEL THE SILK ROAD TOWARDS</p>
                        <h4>Transforming Your Business's Growth Through Digitalization</h4>
                        <h6 className='pt-4 pb-3'>Follow Us On:</h6>
                        <Col style={{ display: 'flex', flexDirection: 'row', fontSize: 'large', }}>
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
                    </Col>
                    <Col md={6} className="msg-card-right">
                        <h2>Get In Touch With Us</h2>
                        <div>
                            <form className="form" onSubmit={onSubmit}>
                                <p className="message">Free contact now and get full access to our app. </p>
                                <label>
                                    <input className="input field" type="text" placeholder="Firstname" name="name" required="" />
                                    {/* <span>Firstname</span> */}
                                </label>

                                <label>
                                    <input className="input field" type="text" placeholder="Company Name" name="Company Name" required="" />
                                    {/* <span>Company Name</span> */}
                                </label>

                                <label>
                                    <input className="input field" type="email" placeholder="Email" name="email" required="" />
                                    {/* <span>Email</span> */}
                                </label>

                                <label>
                                    <input className="input field" type="password" placeholder="Phone Number" name="Phone Number" required="" />
                                    {/* <span>Phone Number</span> */}
                                </label>
                                <label>
                                    <textarea className="input field" type="password" placeholder="Your Message" name="message" required="" rows={3} />
                                    {/* <span>Your Message</span> */}
                                </label>
                                {/* <button className="submit">Submit</button> */}
                                <button class="button" type="submit" >Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Msg
