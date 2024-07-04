import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Herosec from './Herosec';
import NavLogo from './NavLogo';
import OurCompany from './OurCompany';
import Post from './Post';
import MarChos from './MarChos';
import Reponce from './Reponce';
import Team from './Team';
import Msg from './Msg';
import Fotter from './Fotter';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Projects from './Projects';
import Vedio from './Vedio';
import Webdesign from './Webdesign';
import ExpertTeam from './ExpertTeam';
import Websitedesing from './Websitedesing';
import Graphicdesign from './Graphicdesign';
import Contwriting from './Contwriting';


function App() {
  return (  
    <Router>
      <div>
        <NavLogo />
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Herosec />
              <OurCompany />
              <Post />
              <MarChos />
              <Reponce />
              <Team />
              <Msg />
            
            </>
          } />
          <Route path="/services" element={{}} />
          <Route path="/projects" element={
            <>
            <Projects/> 
            </>
            } />
          <Route path="/blog" element={
            <>
            <Blog/>
            </>
            } />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
            {/* ----------------------------------Navbar-End------------------------------------------ */}
            
            
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/ExpertTeam" element={<ExpertTeam/>} />

            {/* --------------------------------------PROJECT NAVBAR------------------------------ */}
            <Route path="/Vedio" element={<Vedio/>} />
            <Route path="/webdesign" element={<Webdesign/>} />
            <Route path="/Graphicdesign" element={<Graphicdesign/>} />
            {/* --------------------------------------PROJECT NAVBAR END------------------------------ */}
            
            

            {/* --------------------------------------SERVICES NAVBAR------------------------ */}
            <Route path="/Websitedesing" element={<Websitedesing/>} />
            <Route path="/Digitaladvertising" element={<Websitedesing/>} />
            <Route path="/Socialmediamanagment" element={<Websitedesing/>} />
            <Route path="/Graphicdesign" element={<Websitedesing/>} />
            <Route path="/Vedioediting" element={<Websitedesing/>} />
            <Route path="/seo" element={<Websitedesing/>} />
            {/* ----------------------------------------------SERVICES NAVBAR END----------------- */}



            {/* ---------------------------------------FOOTER------------------------------------- */}

            <Route path="/Contentwriting" element={<Contwriting/>} />
            <Route path="/marketingservices" element={<Post/>} />
            <Route path="/Ourteam" element={
              <>
              <Team />
              <ExpertTeam/>
              </>
          } />



        </Routes>
        <Fotter />
      </div>
    </Router>
    // </div>

  );
}

export default App;
