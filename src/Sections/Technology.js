import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactLogo from '../assets/images/react-js-logo-dark.png';
import Html5 from '../assets/images/html5-logo.png';
import CSS from '../assets/images/css-logo.png';
import GHPage from '../assets/images/github-pages-logo.png';

let iso = '';

class Technology extends React.Component {  
  render() {
    return (
      <section className="technology padding-top-110 padding-bottom-90 primary_bg" id="technology">
          <Container>
            <div className="sec_title">
              <h2>Tech used</h2>
            </div>
            <Row>
              <Col ld={3} md={3} sm={6}>
                <img src={ReactLogo} alt="React JS" />
              </Col>
              <Col ld={3} md={3} sm={6}>
                <img src={Html5} alt="HTML 5" />
              </Col>
              <Col ld={3} md={3} sm={6}>
                <img src={CSS} alt="HTML 5" />
              </Col>
              <Col ld={3} md={3} sm={6}>
                <img src={GHPage} alt="HTML 5" />
              </Col>
            </Row>
          </Container>
      </section>
    );
  }
}

export default Technology;
