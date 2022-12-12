import React from 'react';
//import logo from './logo.svg';
import WebFont from 'webfontloader';
//import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
//import Scrollbar from 'smooth-scrollbar';
import MobileMenu from './Component/MobileMenu';
import Header from './Component/Header';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Services from './Sections/Services';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';
import Footer from './Component/Footer';

class App extends React.Component {
  componentDidMount() {
    document.title = "Faiyaz Vaid | Wordpress | Frontend | Hubspot | Woocommerce | Plugin Developer in India";
    document.querySelector("meta[name='viewport']").content="width=device-width, initial-scale=1; maximum-scale=1";
    document.querySelector("meta[name='description']").content="Wordpress developer since 2015 and with expertise in Wordpress, PHP, Hubspot";
    WebFont.load({
      google: {
        families: ['Montserrat:300,400,500,600,700,800,900', 'Poppins:300,400,500,600,700,800,900']
      }
    });
  }
  render() {
    return (
      <div className="App">
        <MobileMenu />
        <Header />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
