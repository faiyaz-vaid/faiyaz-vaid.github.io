import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'react-images-loaded';
import "react-image-gallery/styles/css/image-gallery.css";
import UrbanMonkey from './Portfolio/UrbanMonkey';
import UrbanMonkeyImage from '../assets/images/Portfolio/UrbanMonkey/smartmockups_km4ruk20.jpg';
import Yellowchilly from './Portfolio/Yellowchilly';
import YellowchillyImage from '../assets/images/Portfolio/yellow-01.jpg';
import KitchenInspiration from './Portfolio/KitchenInspiration';
import KitchenInspirationImage from '../assets/images/Portfolio/kitchen-inspirations-cover.jpg';
import InnovationSuper from './Portfolio/InnovationSuper';
import InnovationSuperImage from '../assets/images/Portfolio/InnovationSuper/cover.jpg';
import ASFS from './Portfolio/ASFS';
import ASFSImage from '../assets/images/Portfolio/ASFS/smartmockups_km31rlwi.jpg';
import MaxSolutions from './Portfolio/MaxSolutions';
import MaxSolutionsImage from '../assets/images/Portfolio/MaxSolutions/smartmockups_km3bpp3s.jpg';
import Crownbrush from './Portfolio/Crownbrush';
import CrownbrushImage from '../assets/images/Portfolio/Crownbrush/crown-cover.jpg';
import PostCarouselPlugin from './Portfolio/PostCarouselPlugin';
import PostCarouselPluginImage from '../assets/images/Portfolio/Plugins/PostCarousel/icon-256x256.jpg';
import CF7Recaptcha from './Portfolio/CF7Recaptcha';
import CF7RecaptchaImage from '../assets/images/Portfolio/Plugins/CF7Recaptcha/icon-256x256.jpg';

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
    var elems = document.querySelectorAll(".ul-filter li");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active_filter");
    });
    (instance.target).classList.add('active_filter');
    console.log(filterVal);
    iso.arrange({
      filter: filterVal
    });
  }
  openPopup = instance => {
    instance.preventDefault();
    var target = instance.currentTarget.getAttribute('data-target');
    if(document.getElementsByClassName(target).length) {
      document.getElementsByClassName('project-popup')[0].classList.add('show-popup');
      document.getElementsByClassName(target)[0].classList.add('active-content');
      document.body.classList.add('popup-open');
    }
  }
  closePopup = instance => {
    instance.preventDefault();
    //document.getElementsByClassName('project-row').classList.remove('active-content');
    var elems = document.querySelectorAll(".active-content");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-content");
    });
    document.getElementsByClassName('project-popup')[0].classList.remove('show-popup');
    document.body.classList.remove('popup-open');
  }
  render() {
    return (
      <section className="portfolio padding-top-110 padding-bottom-90 primary_bg" id="portfolio">
        <ImagesLoaded done={this.handleDone}>
          <Container>
            <div className="sec_title">
              <h2>Portfolio</h2>
            </div>
            <ul className="list-unstyled ul-filter">
              <li data-filter="*" className="active_filter" onClick={this.filterIso}>all</li>
              <li data-filter=".wordpress" onClick={this.filterIso}>Wordpress</li>
              <li data-filter=".woocommerce" onClick={this.filterIso}>Woocommerce</li>
              <li data-filter=".plugin" onClick={this.filterIso}>Plugins</li>
            </ul>
            <Row className="grid">
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#urbanmonkey" data-target="urbanmonkey" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={UrbanMonkeyImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Urban Monkey Cafe</h3>
                        <p>Wordpress + Elementor</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#yellowchilly" data-target="yellowchilly" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={YellowchillyImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Yellow Chilly</h3>
                        <p>Wordpress + Divi</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#kitcheninspiration" data-target="kitcheninspiration" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={KitchenInspirationImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Kitchen Inspirations</h3>
                        <p>Wordpress + Divi</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#innovationsuper" data-target="innovationsuper" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={InnovationSuperImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Innovation Super</h3>
                        <p>Wordpress + Divi</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item wordpress">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#asfs" data-target="asfs" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={ASFSImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>All Aspects Firestopping</h3>
                        <p>Wordpress + Divi</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item woocommerce">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#maxsolutions" data-target="maxsolutions" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={MaxSolutionsImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Max Solutions</h3>
                        <p>Wordpress + Woocommerce + Divi</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item woocommerce">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#crownbrush" data-target="crownbrush" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={CrownbrushImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Crown Brush Australia</h3>
                        <p>Wordpress + Woocommerce + Tonda</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item plugin">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#postcarouselplugin" data-target="postcarouselplugin" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={PostCarouselPluginImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Post Carousel for DV Builder</h3>
                        <p>For DIVI Theme only</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6" xs="12" className="grid-item plugin">
                <div className="box animated1 animated1_scroll fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <div className="portfolio-box">
                    <a href="#cf7recaptcha" data-target="cf7recaptcha" onClick={this.openPopup}>
                      <div className="my_img">
                          <img src={CF7RecaptchaImage} alt=''/>
                      </div>
                      <div className="portfolio-info">
                        <h3>Disable Recaptcha – CF7</h3>
                        <p>Contact form 7 required</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </ImagesLoaded>
        <div className="project-popup">
          <div className="project-popup-content">
              <div className="project-popup-close">
                  <a href="#close" className="pclose" onClick={this.closePopup}>
                      <span></span>
                      <span></span>
                  </a>
              </div>
              <UrbanMonkey />
              <Yellowchilly />
              <KitchenInspiration />
              <InnovationSuper />
              <ASFS />
              <MaxSolutions />
              <Crownbrush />
              <PostCarouselPlugin />
              <CF7Recaptcha />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
