import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <section className="contact padding-top-110 padding-bottom-90 primary_bg" id="contact">
      <Container>
        <div className="sec_title">
          <h2>Contact</h2>
        </div>
        <Row>
          <Col sm="9">
            <div className="contact_form">
              <form action="https://morgan-avab.netlify.com/send.php" method="post">
                  <input placeholder="Name" name="name" type="text" className="form-control" />
                  <input placeholder="E-mail" name="email" type="email" className="form-control" />
                  <textarea placeholder="Message" name="message" className="form-control"></textarea>
                  <div className="submit btn">send message</div>
                  {/* <!--Contact form message--> */}
                  <div className="msg_success"><p>Your message has been sent. Thank you!</p></div>
                  <div className="msg_error"><p>Sorry your message can not be sent.</p></div>
                  {/* <!--End contact form message--> */}
              </form>
            </div>
          </Col>
          <Col sm="3">
            <div className="info">
                <div className="content">
                    <div>
                        <h4>Phone</h4>
                        <p>+919714625293</p>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h4>Email</h4>
                        <p><a href="mailto:vaidfaiyaz@gmail.com">vaidfaiyaz@gmail.com</a></p>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h4>Address</h4>
                        <p>Valsad, Gujarat, India</p>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
