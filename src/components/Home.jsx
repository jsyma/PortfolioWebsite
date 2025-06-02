import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GitHubCalendar from "react-github-calendar";
import Person from '../../public/HomePageGuy.png';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [currentLine, setCurrentLine] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const lines = [
    { text: "I'm a recent software engineering graduate", duration: 1000 },
    { text: "seeking new graduate opportunities.", duration: 500 },
    { text: " ", duration: 0 },
    { text: "I am passionate about crafting innovative", duration: 500 },
    { text: "solutions to real-world problems and I love", duration: 500 },
    { text: "learning about everything related to software.", duration: 500 },
    { text: " ", duration: 0 },
    { text: "Currently building StarWardle", duration: 300 }
  ];

  const selectLastHalfYear = (contributions) => {
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(now.getMonth() - 6);
  
    return contributions.filter((activity) => {
      const activityDate = new Date(activity.date);
      return activityDate >= sixMonthsAgo && activityDate <= now;
    });
  };
 
  /* Typing Text Effect */
  useEffect(() => {
    if (currentLine < lines.length) {
        const timer = setTimeout(() => {
            setCurrentLine(currentLine + 1);
        }, lines[currentLine].duration);
        return () => clearTimeout(timer);
    }
  }, [currentLine]);

  /* Github Calendar Loading Animation*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Container className="flex-grow-1 my-3 d-flex flex-column">
      <Row>
        <Col>
          <h1 className="display-4 homepage-message" style={{ fontWeight: 'bold' }}>
            <span style={{color: 'var(--secondary-colour)'}}>Hello!</span><br/>I'm&nbsp;&nbsp;
            <span style={{color: 'var(--secondary-colour)'}}>J</span>onathan&nbsp; 
            <span style={{color: 'var(--secondary-colour)'}}>Ma</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="horizontal-line-top"></div>
        </Col>
      </Row>
      {lines.slice(0, currentLine + 1).map((line, index) => (
        <Row key={index} className="typewriter" style={{paddingLeft: "30px"}}>
          <p>
            {line.text.includes("StarWardle") ? (
              <>
                {line.text.split("StarWardle")[0]}
                <a href="https://starwardle.com" target="_blank" rel="noopener noreferrer" className="home-building-project-link">
                  StarWardle 🡄
                </a>
              </>
            ) : (
              line.text
            )}
          </p>
        </Row>
      ))}
      <Row>
        <Col md={12}>
          <div className="horizontal-line-bottom"></div>
        </Col>
      </Row>
      <Row className="flex-grow-1"> 
        <Col className="order-2 order-md-1 d-flex align-items-end" md={5} lg={6}>
          <img 
            src={Person} 
            className="img-fluid" 
            alt="Guy" 
          />
        </Col>
        <Col className="order-1 order-md-2 d-flex align-items-center justify-content-center" md={7} lg={6}>
          <div className={`d-none d-md-block github-calendar ${isLoaded ? 'loaded' : ''}`}>
            <GitHubCalendar
              username="jsyma"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              transformData={selectLastHalfYear}
              style={{ color: 'white'}}
              labels={{
                totalCount: '{{count}} contributions in the last half year',
              }}
              theme={{
                dark: [
                  "hsl(0, 0%, 20%)",
                  "#0a731f",
                  "#0eb430",
                  "#00ca2a",
                  "#47ff00"
                ]
              }}
              />
          </div>
          <div className={`d-block d-md-none github-calendar ${isLoaded ? 'loaded' : ''}`} style={{ paddingTop: '20px' }}>
            <GitHubCalendar
              username="jsyma"
              blockSize={9}
              blockMargin={3}
              fontSize={11}
              transformData={selectLastHalfYear}
              hideColorLegend={true}
              style={{ color: 'white'}}
              labels={{
                totalCount: '{{count}} contributions in the last half year',
              }}
              theme={{  
                dark: [
                  "hsl(0, 0%, 20%)",
                  "#0a731f",
                  "#0eb430",
                  "#00ca2a",
                  "#47ff00"
                ]
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
    <Analytics />
    </div>
  )
}

export default Home
