import React from 'react'
import './component/pos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import client1 from './images/client1.jpg';
import { Container } from 'react-bootstrap';
import DragHandleIcon from '@mui/icons-material/DragHandle';

function post() {
  return (
    <div className='main-post-page'>
    <Container fluid='lg' className=' post-page'>
  <Row>
      <Col>                    
          <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
            <DragHandleIcon style={{fontSize:'50px', color:'#a4fd25'}} />
            <h5 className="icon-text">TESTIMONIAL</h5>
          </Col>
          <h2 className="post-heading-text mt-4">Marketing Booster Services</h2>
      </Col>
    </Row>
    <Row sm={2} xs={1} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '18rem', marginTop: '25px', marginBottom:'20px', background:'#2d2d2d'}}>
            <Card.Img variant="top" src={client1} />
            <Card.Body>
              <Card.Title className='text-center' style={{color:'#ffffff'}}>CARD TITLE</Card.Title>
              <Card.Text style={{color:'#74777b'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button className='post-btn' style={{backgroundColor:'#a4fd25', border:'none'}}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container >
    </div>
      );
}


export default post
