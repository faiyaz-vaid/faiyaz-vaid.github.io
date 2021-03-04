import React from 'react';
import $ from 'jquery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scrollchor from 'react-scrollchor';
import bannerImage from '../assets/images/me-1.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: ''
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'nav_scroll';
       if(window.scrollY === 0){
           activeClass = '';
       }
       this.setState({ activeClass: activeClass });
    });
    //Animate header script
    $(document).ready(function($){
      //set animation timing
      var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        //type effect
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
        revealDuration = 600,
        revealAnimationDelay = 1500;
      
      initHeadline();
      
    
      function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.cd-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.cd-headline'));
      }
    
      function singleLetters($words) {
        $words.each(function(){
          var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
          for (var i in letters) {
            if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
          }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
      }
    
    
        $(window).on("resize", function () {
    
            setTimeout(function() {
            var wordWidth = $('.cd-words-wrapper b').width();
            $('.cd-words-wrapper').css('width', wordWidth);
            }, 100)
        });
    
      function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function(){
          var headline = $(this);
          
          if(headline.hasClass('loading-bar')) {
            duration = barAnimationDelay;
            setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
          } else if (headline.hasClass('clip')){
            var spanWrapper = headline.find('.cd-words-wrapper'),
              newWidth = spanWrapper.width() + 10
            spanWrapper.css('width', newWidth);
          } else if (!headline.hasClass('type') ) {
            //assign to .cd-words-wrapper the width of its longest word
            var words = headline.find('.cd-words-wrapper b'),
              width = 0;
            words.each(function(){
              var wordWidth = $(this).width();
                if (wordWidth > width) width = wordWidth;
            });
            headline.find('.cd-words-wrapper').css('width', width);
    
          };
    
          //trigger animation
          setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
        });
      }
    
      function hideWord($word) {
        var nextWord = takeNext($word);
        
        if($word.parents('.cd-headline').hasClass('type')) {
          var parentSpan = $word.parent('.cd-words-wrapper');
          parentSpan.addClass('selected').removeClass('waiting');	
          setTimeout(function(){ 
            parentSpan.removeClass('selected'); 
            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
          }, selectionDuration);
          setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
        
        } else if($word.parents('.cd-headline').hasClass('letters')) {
          var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
          hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
          showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    
        }  else if($word.parents('.cd-headline').hasClass('clip')) {
          $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
            switchWord($word, nextWord);
            showWord(nextWord);
          });
    
        } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
          $word.parents('.cd-words-wrapper').removeClass('is-loading');
          switchWord($word, nextWord);
          setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
          setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
    
        } else {
          switchWord($word, nextWord);
          setTimeout(function(){ hideWord(nextWord) }, animationDelay);
        }
      }
    
      function showWord($word, $duration) {
        if($word.parents('.cd-headline').hasClass('type')) {
          showLetter($word.find('i').eq(0), $word, false, $duration);
          $word.addClass('is-visible').removeClass('is-hidden');
    
        }  else if($word.parents('.cd-headline').hasClass('clip')) {
          $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
            setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
          });
        }
      }
    
      function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');
        
        if(!$letter.is(':last-child')) {
           setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
        } else if($bool) { 
           setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
        }
    
        if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
          var nextWord = takeNext($word);
          switchWord($word, nextWord);
        } 
      }
    
      function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');
        
        if(!$letter.is(':last-child')) { 
          setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
        } else { 
          if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
          if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
        }
      }
    
      function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
      }
    
      function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
      }
    
      function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
      }
    });
  }
  render() {
    return (
      <section className="home svg_shape bg_image" id="home" style={{backgroundImage: "url(" + bannerImage + ")"}}>
        <div className="full_height">
          <Navbar bg="transparent" fixed="top" className={`${this.state.activeClass}`}>
            <Container>
              <Navbar.Brand href="#home">FAIYAZ</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav as="ul" defaultActiveKey="#home">
                  <Nav.Item as="li">
                    <Scrollchor to="#home" animate={{offset: 0, duration: 800}} className="nav-link">Home</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#about" animate={{offset: -50, duration: 800}} className="nav-link">About</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#services" animate={{offset: -50, duration: 800}} className="nav-link">Services</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#portfolio" animate={{offset: -50, duration: 800}} className="nav-link">Portfolio</Scrollchor>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Scrollchor to="#contact" animate={{offset: -50, duration: 800}} className="nav-link">Contact</Scrollchor>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
            <Row style={{ height: '100vh' }}>
              <Col className="align-self-center">
                <h3>Hello, I'm Faiyaz Vaid</h3>
                <h1 className="cd-headline letters rotate-2 is-full-width">
                    <span className="cd-words-wrapper">
                        <b className="is-visible">Developer</b>
                        <b>Freelancer</b>
                    </span>
                </h1>
              </Col>
            </Row>
            {/* <div className="">
              <h3>Hello, I'm Faiyaz Vaid</h3>
            </div> */}
          </Container>
          <Container className="go_down_container">
            <div className="go_down">
              <Scrollchor to="#about" animate={{offset: -50, duration: 800}} className="smooth_scroll">
                <span></span>
                <span></span>
              </Scrollchor>
            </div>
          </Container>
        </div>
        <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ fill: "#fff" }}> <path d="M0 0 C 50 100 80 100 100 0 Z"></path> </svg>
      </section>
    )
  }
}

export default Header;
