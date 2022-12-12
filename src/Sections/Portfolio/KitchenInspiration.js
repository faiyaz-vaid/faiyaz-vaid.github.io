import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/kitchen-inspirations-cover.jpg';
import Image2 from '../../assets/images/Portfolio/laptop-view.jpg';
import Image3 from '../../assets/images/Portfolio/mobile-view.jpeg';

class KitchenInspiration extends React.Component {
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
            <Row className="project-row kitcheninspiration">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Kitchen Inspirations</h3>
                        <div className="project-description">
                            <p>Kitchen Inspirations provides Tweed and Gold Coast home owners with beautifully designed, user friendly kitchens. Managed by Border Joinery, Kitchen Inspirations offer joinery from kitchens, bathroom vanities, wardrobes, laundry, entertainment units & more.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Theme</strong>: Divi</p>
                            <a href="https://kitcheninspirations.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default KitchenInspiration;