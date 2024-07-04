import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/vedioo.css';

const VideoGrid = () => {
  const videos = [
    { id: '1', src: 'https://www.youtube.com/embed/M7lc1UVf-VE', title: 'Zoha Portfolio' },
    { id: '2', src: 'https://www.youtube.com/embed/ScMzIvxBSi4', title: 'Shaun Portfolio' },
    { id: '3', src: 'https://www.youtube.com/embed/tgbNymZ7vqY', title: 'Talks HEST' },
    { id: '4', src: 'https://www.youtube.com/embed/K4TOrB7at0Y', title: 'Citi Housing Portfolio' },
    { id: '5', src: 'https://www.youtube.com/embed/8UVNT4wvIGY', title: 'FairField Video Portfolio' },
    { id: '6', src: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', title: 'East' },
    { id: '7', src: 'https://www.youtube.com/embed/XGSy3_Czz8k', title: 'Evil Within Batman Portfolio' },
    { id: '8', src: 'https://www.youtube.com/embed/LXb3EKWsInQ', title: 'Eid Mubarak Hart&Ads Portfolio' },
    { id: '9', src: 'https://www.youtube.com/embed/rhzmNRtIp8k', title: 'CareGreen Portfolio Video' }
  ];

  return (
    <div className='vedios'>
    <Container className="video-grid">
      <Row>
        <h1 className='text-center vedio-heading'>VEDIO EDITING</h1>
        {videos.map(video => (
          <Col key={video.id} xs={12} sm={6} md={4} className="mb-4">
            <div className="video-card">
              <iframe 
                className="video-frame"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-title">{video.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default VideoGrid;
