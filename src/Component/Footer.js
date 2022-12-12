import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer>
      <Container className="text-center">
        <h3>Faiyaz Vaid</h3>
        <div className="social-links">
            <a href="https://www.facebook.com/faiyaz.vaid" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/vaidfaiyaz" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="https://in.linkedin.com/in/faiyaz-vaid-9708ab65" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
            </a>
            <a href="http://instagram.com/faiyaz.vaid" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
            </a>
        </div>
        <p>&copy; 2022 Faiyaz Vaid | All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
