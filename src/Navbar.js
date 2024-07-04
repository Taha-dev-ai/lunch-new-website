import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown ,Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './component/navbar.css';


const NavbarComponent = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isServiceDropdown, setServiceDropdown] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <Navbar expand="lg" className="navbar-expand-lg">
      <Container fluid>
        <Navbar.Brand href="#" className='logo me-auto'>LOGO</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas} /> */}

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link mx-lg-2 " activeClassName="active">HOME</NavLink>
              <NavDropdown
                title={<span className="nav-link mx-lg-2">SERVICES</span>}
                id="navbarScrollingDropdown"
                onMouseEnter={() => setServiceDropdown(true)}
                onMouseLeave={() => setServiceDropdown(false)}
                show={isServiceDropdown}
              >
                <NavDropdown.Item as={NavLink} to="/Websitedesing">Website Design</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Digitaladvertising">Digital Advertising</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Socialmediamanagment" activeClassName="active">Social Media Management</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Graphicdesign">Graphic Design</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Vedioediting">Video Editing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/seo">Search Engine Optimization</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Contentwriting">Content Writing</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<NavLink to="/projects" className="nav-link mx-lg-2" activeClassName="active">PROJECTS</NavLink>}
                id="navbarScrollingDropdown"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
                show={isDropdownVisible}
              >
                <NavDropdown.Item as={NavLink} to="/webdesign">Website Design</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Graphicdesign">Graphic Design</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Vedio" activeClassName="active">Video Editing</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/blog" className="nav-link mx-lg-2" activeClassName="active">BLOG</NavLink>
              <NavLink to="/aboutus" className="nav-link mx-lg-2" activeClassName="active">ABOUT US</NavLink>
              <NavLink to="/contactus" className="nav-link mx-lg-2" activeClassName="active">CONTACT US</NavLink>
            </Nav>
            <Nav className='login'>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
            <NavLink to="/login" className="Nv-button" activeClassName="active">Login</NavLink>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas} />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
