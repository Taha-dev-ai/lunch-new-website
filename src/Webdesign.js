import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Webdes.css';
import client1 from './images/client1.jpg'

const Vedio = () => {
  const items = [
    { imgSrc: client1 , title: 'Influencers Off Multan' },
    { imgSrc: client1 , title: 'Beechems Solutions' },
    { imgSrc: client1 , title: 'Hort And Ads' },
    { imgSrc: client1 , title: 'MM Voyages' },
    { imgSrc: client1 , title: 'Nixonit Social Media' },
    { imgSrc: client1 , title: 'Social Bizzwords' },
    { imgSrc: client1 , title: 'Dewan Holdings' },
    { imgSrc: client1 , title: 'Sajjad And Sons Real Estate' },
    { imgSrc: client1 , title: 'Unique Concepts' },
    { imgSrc: client1 , title: 'Hoobank Clone' },
    { imgSrc: client1 , title: 'Hoobank Clone' },
    { imgSrc: client1 , title: 'Hoobank Clone' },
  ];

  return (
    <div className='webdesign'>
    <Container className="custom-grid mt-">
      <Row>
      <h1 className='text-center  webdesign-heading'>WEBSITE DESIGNING</h1>
        {items.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card">
              <Card.Img variant="top" src={item.imgSrc} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Vedio;
