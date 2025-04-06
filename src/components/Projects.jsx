import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ProjectData from '../data/Projects.json';

const Projects = () => {

  
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (imgUrl) => {
    setModalImage(imgUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const renderProjects = (projects) => {
    return (
      <Container>
        <Row>
          {
            projects.map((projectItem, idx) => (
              <Col key={idx} md={6} lg={4} style={{ padding:"20px" }}>
                <div className={projectItem.builtStatus ? "project-card-built" : "project-card-building"}>
                  <img src={projectItem.image} alt="project-image" />
                  <div className="project-card-content">
                    <h1>{projectItem.title}</h1>
                    <p>
                      {projectItem.description.split('|')[0]} 
                      {projectItem.description.split('|')[1] && (
                        <span style={{ fontSize: '16px', fontStyle: 'italic', marginTop: '15px', display: 'block' }}>
                          {projectItem.description.split('|')[1].trim()}
                        </span>
                      )}
                    </p>                   
                    {projectItem.url || projectItem.learnMoreImage || projectItem.github ? (
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                        {projectItem.github && (
                          <button className="github-button" onClick={() => window.open(projectItem.github)}>Github</button>
                        )}
                        {projectItem.url && (
                          <button className="view-button" onClick={() => window.open(projectItem.url)}>View</button>
                        )}
                        {projectItem.learnMoreImage && (
                          <button className="learn-more-button" onClick={() => handleOpenModal(projectItem.learnMoreImage)}>Learn More</button>
                        )}
                      </div>
                    ) : (
                      <span style={{ color: "black", fontFamily: "var(--secondary-font)", marginBottom: "20px", padding: "5px 20px" }}>
                        {projectItem.stage}
                      </span>
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
        <h1 className="my-3 d-flex align-items-center justify-content-center">Projects</h1>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p>Here's a look at what I'm currently <strong style={{color: 'var(--building-accent)'}}>building&nbsp;</strong></p>
          <p>and what I've <strong style={{ color: 'var(--built-accent'}}>built</strong> so far</p>
        </div>
        <div style={{ padding: "1em" }}>{renderProjects(ProjectData.projects)}</div>
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Body 
            style={{
              padding: 0,
              height: modalImage && modalImage.endsWith('.pdf') ? '80vh' : 'auto'
            }}>
            {modalImage && modalImage.endsWith('.pdf') ? (
              <embed 
                src={modalImage} 
                type="application/pdf" 
                width="100%" 
                height="100%" 
                style={{ display: 'block' }} 
              />
            ) : (
              <img src={modalImage} alt="learn-more-image" style={{ width: '100%', height: 'auto' }} />
            )}
          </Modal.Body>
        </Modal>
      <Footer />
    </div>
  )
}

export default Projects
