import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Me from '../assets/images/me.jpg';

function About() {
  return (
    <section className="about padding-top-110 padding-bottom-90" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="my__img">
                <img src={ Me } alt="" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h3>Hello! My Name is Faiyaz Vaid</h3>
            <p>I work as a web developer for WordPress and am based in India. I build modern, functional websites that are aesthetically pleasing and clean.</p>
            <p>I've been working on lovely yet challenging work for the past five years. Continue working while I maintain my health and skills.</p>
            <p>Before beginning any task, I have a practise of asking a question that always helps me and my clients to find a solution to the issue.</p>
            <p>I've worked on a lot of PHP frameworks, but WordPress caught my attention. WordPress is known as a large content management system (CMS), yet most people mistakenly believe that it is merely blogging software. Believe me! Once you realise how simple WordPress is, you'll fall in love with it.</p>
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
