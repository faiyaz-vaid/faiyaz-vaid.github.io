import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-animated-progress-bar';

function Skills() {
  return (
    <section className="skills padding-top-110 padding-bottom-90 primary_bg" id="skills">
      <Container>
        <div className="sec_title">
            <h2>Skills</h2>
        </div>
        <Row>
          <Col lg={2} md={3} sm={6} className="md-5">
            <div className="skill-wrapper">
              <h3>PHP</h3>
              <ProgressBar
                width="100%"
                height="100%"
                fontColor="white"
                trackWidth="10"
                percentage="80"
                trackPathColor="#fff"
                trackBorderColor="#ccc"
                hollowBackgroundColor="#787CB4"
                defColor={{
                  fair: '#787CB4',
                  good: '#787CB4',
                  excellent: '#787CB4',
                  poor: '#787CB4',
                }}
              />
              {/* <ProgressBar
                width="400px"
                height="10px"
                rect
                fontColor="#000"
                percentage="70"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="trasparent"
                trackBorderColor="#6b347d"
                defColor={{
                  fair: '#6b347d',
                  good: '#6b347d',
                  excellent: '#6b347d',
                  poor: '#6b347d',
                }}
              /> */}
            </div>
          </Col>
          <Col lg={2} md={3} sm={6} className="md-5">
            <div className="skill-wrapper">
              <h3>Wordpress</h3>
              <ProgressBar
                width="100%"
                height="100%"
                fontColor="white"
                trackWidth="10"
                percentage="70"
                trackPathColor="#fff"
                trackBorderColor="#ccc"
                hollowBackgroundColor="#32373C"
                defColor={{
                  fair: '#32373C',
                  good: '#32373C',
                  excellent: '#32373C',
                  poor: '#32373C',
                }}
              />
            </div>
          </Col>
          <Col lg={2} md={3} sm={6} className="md-5">
            <div className="skill-wrapper">
              <h3>HTML</h3>
              <ProgressBar
                width="100%"
                height="100%"
                fontColor="white"
                trackWidth="10"
                percentage="80"
                trackPathColor="#fff"
                trackBorderColor="#ccc"
                hollowBackgroundColor="#E44D26"
                defColor={{
                  fair: '#E44D26',
                  good: '#E44D26',
                  excellent: '#E44D26',
                  poor: '#E44D26',
                }}
              />
            </div>
          </Col>
          <Col lg={2} md={3} sm={6} className="md-5">
            <div className="skill-wrapper">
              <h3>SCSS/CSS</h3>
              <ProgressBar
                width="100%"
                height="100%"
                fontColor="white"
                trackWidth="10"
                percentage="60"
                trackPathColor="#fff"
                trackBorderColor="#ccc"
                hollowBackgroundColor="#264DE4"
                defColor={{
                  fair: '#264DE4',
                  good: '#264DE4',
                  excellent: '#264DE4',
                  poor: '#264DE4',
                }}
              />
            </div>
          </Col>
          <Col lg={2} md={3} sm={6} className="md-5">
            <div className="skill-wrapper">
              <h3>jQuery</h3>
              <ProgressBar
                width="100%"
                height="100%"
                fontColor="white"
                trackWidth="10"
                percentage="60"
                trackPathColor="#fff"
                trackBorderColor="#ccc"
                hollowBackgroundColor="#0968AC"
                defColor={{
                  fair: '#0968AC',
                  good: '#0968AC',
                  excellent: '#0968AC',
                  poor: '#0968AC',
                }}
              />
            </div>
          </Col>
          <Col lg={2} md={3} sm={6} className="md-5">
            <div className="skill-wrapper">
              <h3>Hubspot</h3>
              <ProgressBar
                width="100%"
                height="100%"
                fontColor="white"
                trackWidth="10"
                percentage="70"
                trackPathColor="#fff"
                trackBorderColor="#ccc"
                hollowBackgroundColor="#F4795A"
                defColor={{
                  fair: '#F4795A',
                  good: '#F4795A',
                  excellent: '#F4795A',
                  poor: '#F4795A',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
