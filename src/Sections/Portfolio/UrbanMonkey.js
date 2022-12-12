import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/UrbanMonkey/smartmockups_km4ruk20.jpg';
import Image2 from '../../assets/images/Portfolio/UrbanMonkey/smartmockups_km4rx7en.jpg';
import Image3 from '../../assets/images/Portfolio/UrbanMonkey/smartmockups_km4rs6mp.jpg';

class UrbanMonkey extends React.Component {
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
            <Row className="project-row urbanmonkey">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Urban Monkey Cafe</h3>
                        <div className="project-description">
                            <p>Urban Monkey has been serving it up since 2015, with an evolving seasonal menu, of fine food, killer coffee, wholefood smoothies and great service.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Theme</strong>: Astra + Elementor</p>
                            <a href="https://urbanmonkeycafe.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default UrbanMonkey;