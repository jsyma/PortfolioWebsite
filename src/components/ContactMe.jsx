import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import InstagramLogo from '../assets/InstagramLogo.webp';
import LinkedinLogo from '../assets/LinkedinLogo.webp';
import GithubLogo from '../assets/GithubLogo.webp';

const ContactMe = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [clicked, setClicked] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length  <= 0) {
      tempErrors["name"] = "Name is required";
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        tempErrors["email"] = "Invalid Email Format";
        isValid = false;
      }
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = "Subject is required";
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = "Message is required";
      isValid = false;
    }
    setErrors({...tempErrors});
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setClicked(true);
    let isValidForm = handleValidation();
    const data = { name, email, subject, message };
    
    if (isValidForm) {
      try {
        const res = await axios.post('api/contactme', data);
        console.log(res.data);
        if (res.data.success) {
            Swal.fire({
              title: "Success",
              text: "Message sent successfully!",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              customClass: {
                title: 'popup-title',
                text: 'popup-text'
              }
            }).then(() => {
              setClicked(false);
            });
        }
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      const errorMessages = Object.values(errors)
        .map(value => `<li style="text-align: left; padding-left: 30%; font-size: 16px;">${value}</li>`)
        .join('');
  
      Swal.fire({
        title: "Missing Fields",
        html: errorMessages,
        icon: 'error',
        confirmButtonText: 'Okay!',
        customClass: {
          title: 'popup-title',
          html: 'popup-text',
          confirmButton: 'popup-button'
        }
      }).then(() => {
        setClicked(false);
      });
      console.log("Form is invalid");
    }
  };


  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <h1 className="my-3 d-flex align-items-center justify-content-center">Contact Me</h1>
    <Container>
      <Row>
        <Col sm={12} md={5} className="d-flex flex-column align-items-center justify-content-center order-2 order-md-1">
          <Row>
            <p className="find-me-on-message">Find me on 📲</p>
          </Row>
          <Row className="g-4" style={{ marginTop: '5px', marginBottom: '30%' }}>
            <Col xs={4}>
              <a href="https://linkedin.com/in/jsyma" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinLogo} className="social-icons img-fluid"/>
              </a>
            </Col>
            <Col xs={4}>
              <a href="https://github.com/jsyma" target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} className="social-icons img-fluid"/>
              </a>
            </Col>
            <Col xs={4}>
              <a href="https://instagram.com/okayjma" target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} className="social-icons img-fluid"/>
              </a>
            </Col>
          </Row>
        </Col>
  
        <Col sm={12} md={7} className="order-1 order-md-2">
          <p className="lets-connect-message">
            <strong style={{ fontFamily: 'var(--secondary-font)', fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--secondary-colour)', letterSpacing: '1px'}}>Let’s Connect!</strong> 
            🤝 I look forward to hearing from you. 
            Please fill out the form below, and I’ll get back to you shortly. 
            Excited to chat!
          </p>
          <form onSubmit={handleSubmit} className="email-form">
            <Row>
              <Col md={6} sm={12}>
                <div>
                  <label>Name</label>
                  <input 
                    type="text"
                    placeholder={errors.name ? errors.name : "Your Full Name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? 'input-error' : ""}
                  />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div>
                  <label>Email</label>
                  <input 
                    type="email"
                    placeholder={errors.email ? errors.email : "you@example.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? 'input-error' : ""}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <label>Subject</label>
                <input 
                  type="text"
                  placeholder={errors.subject ? errors.subject : "Subject of your message"}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={errors.subject ? 'input-error' : ""}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <label>Message</label>
                <textarea
                  cols="20"
                  rows="10"
                  placeholder={errors.message ? errors.message : "Write your message here..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`textarea ${errors.message ? 'input-error' : ''}`}
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <button className={`submit-button ${clicked ? 'active' : ''}`} type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
  )
}

export default ContactMe
