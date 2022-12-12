import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/InnovationSuper/cover.jpg';
import Image2 from '../../assets/images/Portfolio/InnovationSuper/smartmockups_km3249lj.jpg';
import Image3 from '../../assets/images/Portfolio/InnovationSuper/smartmockups_km322a6r.jpg';
import Image4 from '../../assets/images/Portfolio/InnovationSuper/smartmockups_km325fwr.jpg';

class InnovationSuper extends React.Component {
    render() {
        const images = [
            {
              original: Image1,
              thumbnail: Image1,
            },
            {
              original: Image2,
              thumbnail: Image2,
            },
            {
              original: Image3,
              thumbnail: Image3,
            },
            {
              original: Image4,
              thumbnail: Image4,
            }
        ]
        return (
            <Row className="project-row innovationsuper">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Innovation Super</h3>
                        <div className="project-description">
                            <p>Innovation Super is headed by Natalie and are a local accounting firm who love to help small businesses with taxation, accounting and self-managed superannuation funds in Kingscliff and beyond.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Theme</strong>: Divi</p>
                            <a href="https://innovationsuper.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default InnovationSuper;