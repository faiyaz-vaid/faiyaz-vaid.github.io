import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/Crownbrush/crown-cover.jpg';
import Image2 from '../../assets/images/Portfolio/Crownbrush/crown-02.jpg';
import Image3 from '../../assets/images/Portfolio/Crownbrush/crown-03.jpg';

class Crownbrush extends React.Component {
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
            <Row className="project-row crownbrush">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Crown Brush Australia</h3>
                        <div className="project-description">
                            <p>With over 30 years of brush making tradition in the USA and world wide markets, Crown Brush Australia can offer you the largest range of professional makeup brushes with over 700 different styles.</p>
                            <p>Crown Brush Australia is a leader within the professional make up industry and can offer a number of different products from Pro Brushes, Makeup Palettes, Student Kits and a wide range of cosmetic items.</p>
                            <p>As one of Australia’s leading professional brands, Mecca Creative is lucky enough to work with one of Australia’s leading makeup brand.</p>
                            <p><strong>CMS</strong>: Worpress + Woocommerce</p>
                            <p><strong>Theme</strong>: Tonda</p>
                            <a href="https://crownbrush.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Crownbrush;