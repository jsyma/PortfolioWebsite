import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col xs={8} md={6} className="footer-text">
            <p>Life is short. Smile while you still have teeth.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
