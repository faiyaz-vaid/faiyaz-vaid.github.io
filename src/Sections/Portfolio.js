import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'react-images-loaded';
import portfolioImage from '../assets/images/3.jpg';

let iso = '';

class Portfolio extends React.Component {
  componentDidMount() {
  }
  handleDone = instance => {
    iso = new Isotope( '.grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      // masonry: {
      //   columnWidth: '.grid-sizer'
      // }
    });
  };
  filterIso = instance => {
    var filterVal = (instance.target).getAttribute('data-filter');
    console.log(filterVal);
    iso.arrange({
      filter: filterVal
    });
  }
  render() {
    return (
      <section className="portfolio padding-top-110 padding-bottom-90" id="portfolio">
        <ImagesLoaded done={this.handleDone}>
          <Container>
            <div className="sec_title">
              <h2>Portfolio</h2>
            </div>
            <ul className="list-unstyled ul-filter">
              <li data-filter="*" className="active_filter" onClick={this.filterIso}>all</li>
              <li data-filter=".wordpress" onClick={this.filterIso}>Wordpress</li>
              <li data-filter=".woocommerce" onClick={this.filterIso}>Woocommerce</li>
              <li data-filter=".optimization" onClick={this.filterIso}>Optimization</li>
            </ul>
            <Row className="grid">
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="my_img" data-mfp-src="<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/1.jpg">
                      <img src={portfolioImage} alt=''/>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="my_img" data-mfp-src="<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg">
                      <img src={portfolioImage} alt=''/>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="my_img" data-mfp-src="<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg">
                      <img src={portfolioImage} alt=''/>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item woocommerce">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="my_img" data-mfp-src="<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg">
                      <img src={portfolioImage} alt=''/>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="my_img" data-mfp-src="<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg">
                      <img src={portfolioImage} alt=''/>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item woocommerce">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="my_img" data-mfp-src="<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg">
                      <img src={portfolioImage} alt=''/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </ImagesLoaded>
      </section>
    );
  }
}

export default Portfolio;
