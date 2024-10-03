import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import headShot from '../assets/Jma.jpg';
import worldMap from '../assets/WorldMap.png';
import { FaJava, FaPython, FaReact, FaSquareJs, FaCss3, FaHtml5 } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="my-3 d-flex align-items-center justify-content-center">About Me</h1>
      <Container className="about-me-container">
        <Row className="about-me-intro">
          <Col md={8} className="order-2 order-md-1">
            <h1>Hello! </h1>
            <p>I'm <strong style={{ color: 'var(--secondary-colour' }}>Jonathan Ma</strong> and I'm from Richmond Hill, Ontario, a small town outside Toronto.</p>
            <p>
              I am passionate about <strong style={{ color: 'var(--secondary-colour' }}>creating impactful software</strong> and exploring the realms 
              of <strong style={{ color: 'var(--secondary-colour' }}>data science</strong> and <strong style={{ color: 'var(--secondary-colour' }}>machine learning</strong>.</p>
            <p>
              My journey began at <strong style={{ color: 'rgb(122, 0, 60)' }}>McMaster University</strong>, 
              where I graduated in 2020 with a Bachelor's degree in <strong style={{ color: 'rgb(15, 91, 69)' }}>Life Sciences</strong>. 
              Although I found the field fascinating, I realized my true passion lay in technology and problem-solving.
            </p>
            <p>
              This realization inspired me to make a significant career shift into software engineering. 
              Now, as I near the completion of my fifth year at <strong style={{ color: 'rgb(0, 76, 165)' }}>Toronto Metropolitan University</strong>, 
              I am eager to blend my scientific background with my growing expertise in software development.
            </p>
          </Col>
          <Col md={4} className="order-1 order-md-2 d-flex justify-content-center align-items-center">
            <img src={headShot} alt="my-headshot" className="img-fluid"/>
          </Col>
        </Row>
        <Row className="about-me-skills">
          <h1 style={{ textAlign: 'center' }}>Professional Skillset</h1>
          <Col>
            <FaJava className="tech-icons"/>
          </Col>
          <Col>
            <FaPython className="tech-icons"/>
          </Col>
          <Col>
            <FaReact className="tech-icons"/>
          </Col>
          <Col>
            <FaSquareJs className="tech-icons"/>
          </Col>
          <Col>
            <FaCss3 className="tech-icons"/>
          </Col>
          <Col>
            <FaHtml5 className="tech-icons"/>
          </Col>
        </Row>
        <Row className="about-me-interests">
          <h1 style={{ textAlign: 'center' }}>Code-Free Zone</h1>
          <Col md={4}> 
            <p>When I'm not coding, I like</p>
            <ul>
              <li>Competing in Soccer ⚽</li>
              <li>Playing Volleyball 🏐</li>
              <li>Swimming 🏊🏼‍♂️</li>
              <li>Weight Lifting 🏋️‍♂️</li>
              <li>Listening to Music 🎧</li>
              <li>Photography 📷</li>
              <li>Pursuing a Creative Outlet 🎨</li>
              <li>Trying New Cuisines 🍲</li>
              <li>Traveling 🛫</li>
            </ul>
          </Col>
          <Col md={8} style={{ textAlign: 'center' }}>
            <p>
              One of my dreams is to&nbsp; 
              <strong style={{ color: 'var(--secondary-colour)', letterSpacing: '1px' }}>Travel the World!</strong> 🌎
            </p>
            <p>Here's a map of countries I've visited:</p>
            <img src={worldMap} className="img-fluid"/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default About