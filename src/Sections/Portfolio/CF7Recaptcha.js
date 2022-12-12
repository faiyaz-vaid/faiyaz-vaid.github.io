import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/Plugins/CF7Recaptcha/screenshot-1.jpg';
import Image2 from '../../assets/images/Portfolio/Plugins/CF7Recaptcha/screenshot-2.jpg';

class CF7Recaptcha extends React.Component {
    render() {
        const images = [
            {
              original: Image1,
              thumbnail: Image1,
            },
            {
              original: Image2,
              thumbnail: Image2,
            }
        ]
        return (
            <Row className="project-row cf7recaptcha">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Disable Recaptcha – CF7</h3>
                        <div className="project-description">
                            <p>After new update of contact form 7 they are using google captcha version 3. Which is showing google recaptcha badge on every page of the site which is annoying for some of the users. By using this plugin you can either show it on pages which has contact form or you can also completely remove it.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Plugin</strong>: Contact Form 7 (Required)</p>
                            <p><strong>Ratings</strong>: 4.8 of 5 Star</p>
                            <p><strong>Installations</strong>: 2000+</p>
                            <p><strong>Price</strong>: Free</p>
                            <a href="https://wordpress.org/plugins/disable-recaptcha-cf7/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Plugin</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default CF7Recaptcha;