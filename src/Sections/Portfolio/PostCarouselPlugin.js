import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/Plugins/PostCarousel/screenshot-1.jpg';
import Image2 from '../../assets/images/Portfolio/Plugins/PostCarousel/screenshot-2.jpg';
import Image3 from '../../assets/images/Portfolio/Plugins/PostCarousel/screenshot-3.jpg';
import Image4 from '../../assets/images/Portfolio/Plugins/PostCarousel/screenshot-5.jpg';

class PostCarouselPlugin extends React.Component {
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
            <Row className="project-row postcarouselplugin">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Post Carousel for DV Builder</h3>
                        <div className="project-description">
                            <p>Post Carousel for Divi is fully compatible with Divi theme only. It is a very useful plugin to show your posts or custom post in a awesome sliding manner. It has various options so that you can customize it in your own way.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Theme</strong>: Divi (Required)</p>
                            <p><strong>Ratings</strong>: 4 of 5 Star</p>
                            <p><strong>Installations</strong>: 2000+</p>
                            <p><strong>Price</strong>: Free</p>
                            <a href="https://wordpress.org/plugins/post-carousel-for-dv-builder/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Plugin</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default PostCarouselPlugin;