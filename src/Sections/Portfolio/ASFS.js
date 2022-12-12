import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/ASFS/smartmockups_km31rlwi.jpg';
import Image2 from '../../assets/images/Portfolio/ASFS/cover.jpg';
import Image3 from '../../assets/images/Portfolio/ASFS/smartmockups_km31pjw3.jpg';

class ASFS extends React.Component {
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
            <Row className="project-row asfs">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>All Aspects Firestopping</h3>
                        <div className="project-description">
                            <p>All Aspects Firestopping is a QLD based team who are highly qualified and can help you with a range of questions related to commercial protective coating. We develop specifications, provide technical advisory notes and offer advice on design details to suit your project.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Theme</strong>: Divi</p>
                            <a href="https://allaspectsfirestopping.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ASFS;