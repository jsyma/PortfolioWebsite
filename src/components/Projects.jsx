import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ProjectData from '../data/Projects.json';

const Projects = () => {

  const renderProjects = (projects) => {
    return (
      <Container>
        <Row>
          {
            projects.map((port, idx) => (
              <Col key={idx} md={6} lg={4} style={{ padding:"20px" }}>
                <div className={port.builtStatus ? "project-card-built" : "project-card-building"}>
                  <img src={port.image} alt="project-image" />
                  <div className="project-card-content">
                    <h1>{port.title}</h1>
                    <p>
                      {port.description.split('|')[0]} 
                      {port.description.split('|')[1] && (
                        <span style={{ fontSize: '16px', fontStyle: 'italic', marginTop: '15px', display: 'block' }}>
                          {port.description.split('|')[1].trim()}
                        </span>
                      )}
                    </p>                   
                    {port.url ? (
                      <button className="view-button" onClick={() => window.open(port.url)}>View</button>
                    ) : (
                      <span style={{ color: "black", fontFamily: "var(--secondary-font)", marginBottom: "20px", padding: "5px 20px" }}>{port.stage}</span>
                    )}                  
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
        <h1 className="d-flex align-items-center justify-content-center">Projects</h1>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p>Here's a look at what I'm currently <strong style={{color: 'var(--building-accent)'}}>building&nbsp;</strong></p>
          <p>and what I've <strong style={{ color: 'var(--built-accent'}}>built</strong> so far</p>
        </div>
        <div style={{ padding: "1em" }}>{renderProjects(ProjectData.projects)}</div>
      <Footer />
    </div>
  )
}

export default Projects
