import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    return (
      <section className="contact padding-top-110 padding-bottom-90" id="contact">
        <Container>
          <div className="sec_title">
            <h2>Contact</h2>
          </div>
          <Row>
            <Col sm="12">
              <div className="contact_form">
                <form action="https://formspree.io/f/xqkgvoaz" method="post">
                    <input placeholder="Name" name="name" type="text" className="form-control" required />
                    <input placeholder="E-mail" name="_replyto" type="email" className="form-control" required />
                    <textarea placeholder="Message" name="message" className="form-control" required></textarea>
                    <button type="submit" className="submit btn">Send</button>
                    {/* <div className="submit btn">send message</div> */}
                    {/* <!--Contact form message--> */}
                    <div className="msg_success"><p>Your message has been sent. Thank you!</p></div>
                    <div className="msg_error"><p>Sorry your message can not be sent.</p></div>
                    {/* <!--End contact form message--> */}
                </form>
              </div>
            </Col>
            {/* <Col sm="3">
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
            </Col> */}
          </Row>
        </Container>
      </section>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;
