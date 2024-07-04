import React from 'react'
import './component/OurCom.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DragHandleIcon from '@mui/icons-material/DragHandle';
// import image1 from './images/client1.jpg';
// import image2 from './images/client2.jpg'

function OurCompany() {
  return (
<div className="main-com ">
     <Container fluid="lg">
      <Row style={{display:'flex', flexDirection:'columns'}}>
        <Col sm={6}  className="left-our" >
        <Col className="left-our-inner" style={{backgroundColor:'pink'}}>
        <Col sm={5} style={{backgroundColor:'pink'}} className="left-our-L mb-5"></Col>
        <Col sm={5} style={{backgroundColor:'gray'}} className="left-our-R mt-5"></Col>
        </Col>
        </Col>
        <Col sm={6}  className='right-our' >
        <Col sm={11}>
        <Col style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px', color:'#a4fd25'}}/>
                        <h5 className="icon-text">OUR COMPANY</h5>
                        </Col>
            {/* <Col sm={7}  className="ourcom mt-5 mb-4 p-1"><h4>OUR COMPANY</h4></Col> */}
            <Col sm={12}  className="head p-1 mb-3 mt-3"><h1>Business Consulting Provide Specialized</h1></Col>
            <Col sm={12} style={{ fontSize:'20px' }} className="para p-2 mb-4"><p>Marketing Booster is more than just a virtual marketing agency - it is your brand’s digital powerhouse. At Devbolts LLC, we aim at charging up your brand’s creation with a fuel that ignites your brand’s online potential. Struggling to shine out in a digital world? Choose our electrifying marketing services that bridge the gap between your dreams and reality. As a results-driven marketing agency, we are your ultimate digital partner.</p></Col>
            <Col   className="para mb-3" style={{color:'white'}}>
                <Col sm={4}  className="exprience p-2"style={{fontSize:'3rem', fontWeight:'bold'}}>20+</Col>
                <Col sm={7} className="p-2"><h6>Years Experience On Business Consulting</h6></Col>
            </Col>
            <a href="#action" className='btn-six'><button class="button mb-5">READ MORE</button></a>
        </Col>
        </Col>
      </Row>
      </Container>
      </div>
  )
}

export default OurCompany
