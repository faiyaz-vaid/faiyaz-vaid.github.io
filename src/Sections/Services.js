import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Services() {
  return (
    <section className="services padding-top-110 padding-bottom-90 primary_bg" id="services">
      <Container>
        <div className="sec_title">
            <h2>Services</h2>
        </div>
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-desktop"></i>
                </div>
                <h3>Web Development</h3>
                <p>Whether a new website or existing website or need changes to website I am always available to help you out.</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-magic"></i>
                </div>
                <h3>Frontend Development</h3>
                <p>Do you have design and want to implement it on web? You are on right place. Let's get in touch and start the work.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-bolt"></i>
                </div>
                <h3>Web Optimization</h3>
                <p>Do you have website which is running slow? You have good choice just contact me so I can convert your slow turtle to faster rabbit! :)</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-lock"></i>
                </div>
                <h3>Web Security</h3>
                <p>Are you afraid of being hacked! Or your website has been hacked! Don't worry! I will help you out to increase your website security as well as I will recover your hacked website.1</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
