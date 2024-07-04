import React from 'react'
import './component/ExpertTeam.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import my images
import yaserImage from './images/client1.jpg';
import shahrukhImage from './images/client1.jpg';
import hasaanImage from './images/client1.jpg';

const teamMembers = [
  {
    image: yaserImage,
    name: "Yaser Irshad",
    title: "Patron In Chief"
  },
  {
    image: shahrukhImage,
    name: "Shahrukh Nazar",
    title: "Co-Founder & CEO"
  },
  {
    image: hasaanImage,
    name: "Hasaan Awan",
    title: "Co-Founder & CTO"
  },
  {
    image: yaserImage,
    name: "Yaser Irshad",
    title: "Patron In Chief"
  },
  {
    image: shahrukhImage,
    name: "Shahrukh Nazar",
    title: "Co-Founder & CEO"
  },
  {
    image: hasaanImage,
    name: "Hasaan Awan",
    title: "Co-Founder & CTO"
  }
];

const Team = () => {
  return (
    <div className='Expertteam'>
    <h1 className='text-center Expert-heading pt-5'>Meet Our Expert Team</h1>
    <div className="container team-section mt-5">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="team-member-E card p-3 text-center mb-4">
              <div className="member-image mb-3">
                <img src={member.image} alt={member.name} className="img-fluid rounded-circle"/>
              </div>
              <h3 className="Expart-card-title">{member.name}</h3>
              <p className="Expert-card-text">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Team;
