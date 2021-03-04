import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Me from '../assets/images/me.jpg';

function About() {
  return (
    <section className="about padding-top-110 padding-bottom-90" id="about">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="my__img">
                <img src={ Me } alt="" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h3>Hello! My Name is Faiyaz Vaid</h3>
            <p>I'm 28 years old web developer based in India, specializing in Wordpress Development. I build clean, appealing, and functional websites which comply with the latest web standards.</p>
            <p>From last 5 years I am working on beautiful yet challenging tasks. Keep working let me keep healty and knowledgeful.</p>
            <p>Its my habit to ask a question before diving into any task and which always help me as well as my clients to resolve their problem.</p>
            <p>I have worked on many frameworks of PHP but then I found wordpress very interesting. People think wordpress is just blogging software but they are not aware that this is known as big CMS giant! Trust me! you will fall in love with wordpress once you get to know how easy it is.</p>
            <div className="follow-me">
              <h6>Follow Me :</h6>
              <ul className="text-center list-unstyled social">
                  <li>
                      <a href="https://www.facebook.com/faiyaz.vaid" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-facebook fa-2x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://twitter.com/vaidfaiyaz" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-twitter fa-2x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://in.linkedin.com/in/faiyaz-vaid-9708ab65" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-linkedin fa-2x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="http://instagram.com/faiyaz.vaid" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-instagram fa-2x"></i>
                      </a>
                  </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
