import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scrollchor from 'react-scrollchor';

function Services() {
  return (
    <section className="services padding-top-110 padding-bottom-90" id="services">
      <Container>
        <div className="sec_title">
            <h2>Services</h2>
        </div>
        <Row>
          <Col lg={4} md={4} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-desktop"></i>
                </div>
                <h3>Web Development</h3>
                <p>Whether you need a new website, an update to an existing one, or both, I'm here to help.</p>
                <Scrollchor to="#contact" animate={{offset: -50, duration: 800}} className="gc-link">Get in Touch</Scrollchor>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-magic"></i>
                </div>
                <h3>Frontend Development</h3>
                <p>Do you have a design that you wish to use online as a web? You are at the right place. Let's connect so that we can get to work.</p>
                <Scrollchor to="#contact" animate={{offset: -50, duration: 800}} className="gc-link">Get in Touch</Scrollchor>
            </div>
          </Col>
        {/* </Row>
        <Row> */}
          <Col lg={4} md={4} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-bolt"></i>
                </div>
                <h3>Web Optimization</h3>
                <p>Do you run a slow-loading website? Simply get in touch with me so I can change your slow turtle into a speedy bunny. :)</p>
                <Scrollchor to="#contact" animate={{offset: -50, duration: 800}} className="gc-link">Get in Touch</Scrollchor>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-lock"></i>
                </div>
                <h3>Web Security</h3>
                <p>Do you worry about being hacked? Or perhaps someone has hijacked your website! Not to worry! With addition to recovering your compromised website, I will assist you in enhancing the security of your website.</p>
                <Scrollchor to="#contact" animate={{offset: -50, duration: 800}} className="gc-link">Get in Touch</Scrollchor>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-5">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-plug"></i>
                </div>
                <h3>Plugin Development</h3>
                <p>Are you trying to find the developer of the plugin? You are in the proper location! I can assist you in using a wordpress plugin to put your thoughts into action. Let's connect soon!</p>
                <Scrollchor to="#contact" animate={{offset: -50, duration: 800}} className="gc-link">Get in Touch</Scrollchor>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
