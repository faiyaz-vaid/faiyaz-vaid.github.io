import React from 'react';
//import logo from './logo.svg';
import WebFont from 'webfontloader';
//import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Scrollbar from 'smooth-scrollbar';
import Header from './Component/Header';
import About from './Sections/About';
import Services from './Sections/Services';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';
import Footer from './Component/Footer';

class App extends React.Component {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Montserrat:300,400,500,600,700,800,900', 'Poppins:300,400,500,600,700,800,900']
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
