import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/MaxSolutions/smartmockups_km3bpp3s.jpg';
import Image2 from '../../assets/images/Portfolio/MaxSolutions/smartmockups_km3bmho6.jpg';
import Image3 from '../../assets/images/Portfolio/MaxSolutions/mockup-visual.jpeg';

class MaxSolutions extends React.Component {
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
            }
        ]
        return (
            <Row className="project-row maxsolutions">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Max Solutions</h3>
                        <div className="project-description">
                            <p>I have developed a seamless online shopping experience for one of largest employment providers in Australia, Max Solutions. Our solution allows employees for Max Solutions to order their uniforms online driven by seamless backend integration. Max Solutions deliver life-changing opportunities with positive outcomes for both individuals and employers.</p>
                            <p><strong>CMS</strong>: Worpress + Woocommerce</p>
                            <p><strong>Theme</strong>: Divi</p>
                            <a href="https://freshmaxuniforms.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MaxSolutions;