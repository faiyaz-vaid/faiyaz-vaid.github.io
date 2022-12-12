import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scrollchor from 'react-scrollchor';

class MobileMenu extends React.Component {
  closeMobileMenu(e) {
    document.body.className = document.body.className.replace("mmenu-push","");
  }
  render() {
    return (
      <section className="mobile-menu d-lg-none d-md-none">
          <Navbar bg="transparent">
            <Container>
              <Navbar.Collapse id="mobile-navbar-nav">
                <Nav as="ul" defaultActiveKey="#home">
                  <Nav.Item as="li">
                    <Scrollchor to="#home" beforeAnimate={this.closeMobileMenu} animate={{offset: 0, duration: 800}} className="nav-link">Home</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#about" beforeAnimate={this.closeMobileMenu} animate={{offset: -50, duration: 800}} className="nav-link">About</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#skills" beforeAnimate={this.closeMobileMenu} animate={{offset: -50, duration: 800}} className="nav-link">Skills</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#services" beforeAnimate={this.closeMobileMenu} animate={{offset: -50, duration: 800}} className="nav-link">Services</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#portfolio" beforeAnimate={this.closeMobileMenu} animate={{offset: -50, duration: 800}} className="nav-link">Portfolio</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#contact" beforeAnimate={this.closeMobileMenu} animate={{offset: -50, duration: 800}} className="nav-link">Contact</Scrollchor>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </section>
    )
  }
}

export default MobileMenu;
