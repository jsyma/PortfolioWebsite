import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ExperienceData from '../data/Experience.json';

const Experience = () => {

  const renderProjects = (experience) => {
    return (
      <Container>
        {
          experience.map((experienceItem, idx) => (
            <Row key={idx} className="mb-3 flex-column flex-md-row experience-card">
              <Col xs={12} md={5} lg={4} className="d-flex justify-content-center align-items-center">
                <img src={experienceItem.image} alt="experience-image" style={{ width: '100%', height: 'auto' }}/>
              </Col>
              <Col xs={12} md={7} lg={8} className="experience-card-content">
                <h1>{experienceItem.role}</h1>
                <p style={{ fontSize: '16px' }}>{experienceItem.company}</p>
                <p style={{ fontSize: '15px', fontStyle: 'italic', paddingBottom: '15px' }}>{experienceItem.date}</p>
                <ul>
                  {experienceItem.description.map((descriptionItem, index) => (
                    <li key={index}>{descriptionItem}</li>
                  ))}
                </ul>            
              </Col>
            </Row>
          ))
        }
      </Container>
    );
  };

  return (
    <div>
      <Navbar />
      <h1 className="my-3 d-flex align-items-center justify-content-center">Work Experience</h1>
      <p className="d-flex justify-content-center">Here’s a look at my&nbsp;<strong style={{color: 'var(--work-accent)'}}>past work experiences</strong></p>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div style={{ padding: '2em' }}>{renderProjects(ExperienceData.experience)}</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;