import React from 'react';
import  './component/team.css'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Container, Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import client4 from './images/client4.jpg';
import { Link } from 'react-router-dom';

const TeamPage = () => {
    return (
        <div className="team-page">
            <Container fluid='lg'>
                <Row className="text-center mb-5">
                    <Col>
                        <Col style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px', color:'#a4fd25'}}/>
                        <h5 className="icon-text">OUR MEMBER</h5>
                        </Col>
                        <h2 className="team-heading mt-3">Expert Professionals</h2>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={4} className="text-center">
                        <div className="team-member">
                            <img src={client4} alt="Yasir Irshad" className="img-fluid" />
                            <div className="overlay">
                                <h5>Yasir Irshad</h5>
                                <p>Patron In Chief</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="team-member">
                            <img src={client4} alt="Shahrukh Nazar Malik" className="img-fluid" />
                            <div className="overlay">
                                <h5>Shahrukh Nazar Malik</h5>
                                <p>Co-Founder & CEO</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="team-member">
                            <img src={client4} alt="Hasaan Awan" className="img-fluid" />
                            <div className="overlay">
                                <h5>Hasaan Awan</h5>
                                <p>Co-Founder & CTO</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Link to="/ExpertTeam" className="btn btn-warning view-more-button mt-5">VIEW MORE TEAM</Link>
                        {/* <button class="button mt-5">READ MORE</button> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamPage;
