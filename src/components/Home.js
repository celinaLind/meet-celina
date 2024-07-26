import React from 'react';
import '../assets/style.css';
import { Container, Row, Col, Form, Card, Carousel } from 'react-bootstrap';
import SocialMedia from './SocialMedia.js';
import Contact from './Contact.js';
import SupportMyFriends from './SupportMyFriends.js';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

// will look into embedding social media posts later
// import { InstagramEmbed } from 'react-social-media-embed';
// import { TikTokEmbed } from 'react-social-media-embed';

export default function Home() {

    return (
        <main>
        <Container className='mt-3'>
            <Row>
            <Col className='rotating-border ma-auto'>
                <h2>Hi Friend!</h2>
                <h4 className='intro'>Get to know Celina,</h4>
                <h4 className="typewriter descriptive-text">talented software developer.</h4>
                <SocialMedia email={"clind323@gmail.com"} linkedInUser={"celina-lind"} discordUser={"hamlit1163"}/>
            </Col>
            <Col>
                <Container className='d-flex justify-content-center mt-3' >
                <Col>
                    <h3>Celina Lind</h3>
                    <p>I have many titles: CS student, Headstarter Fellow, Junior Software Developer, aspiring French speaker. These titles are encouraged by my a passion for learning and creating new things. I am experienced in JavaScript, React, CSS and more. 
                    I am excited to continue learning and growing as a developer and as a person.</p>
                    <p>When I am not coding, I enjoy spending time with my family and friends. My career goal is to progress in the field of AI and Robotics.</p>
                </Col>
                </Container>
            </Col>
            </Row>
        </Container>
        <Container className='mt-3'>
            <Row>
            <Col>
                <h2 id='experience'>Experience</h2>
<MDBContainer fluid className="py-5" >
      <div className="main-timeline">
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>Headstarter Fellow</h3>
              <p className="mb-0">
                I am currently a Headstarter Fellow and college student.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>Junior Software Developer</h3>
              <p className="mb-0">
                As Novvia sales were ramping down, I was offered a full-time position at eComsystems as a junior software developer.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>Junior Software Developer</h3>
              <p className="mb-0">
                Gained a full-time position at Novvia as a junior software developer after my internship.
                During that time I lead a team of developers and client communications to convert web applications from Php to JavaScript.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>Software Development Intern</h3>
              <p className="mb-0">
                Worked as a software development intern at a small startup, Novvia which sadly no longer exists. 
                I worked on a team of developers to create mobile and web applications for clients. 
                I worked on the front-end and back-end of the application. I learned a lot about software development and gained valuable experience.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>Graduate with Associates of Science in Computer Science</h3>
              <p className="mb-0">
                Woohooo!
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>Engineering Internship</h3>
              <p className="mb-0">
                I did a year-long internship at Hirschvogel Incorporated. I worked on a team of engineers to maintain and optimize manufacturing operations. 
                More to include here.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
            </Col>
            </Row>
        </Container>
        <SupportMyFriends />
        <hr className='rotationalBorder' />
        <Container className='contact-section mt-3'>
            <Row>
            <Col>
            {/* <h4 id='contact-me'>Contact Me</h4> */}
            <Contact />
            </Col>
            <Col>
                <Container className='rotating-border'>
                <h4>Celina Lind</h4> 
                <p>Based in Las Vegas, NV</p>
                <SocialMedia email={"clind323@gmail.com"} linkedInUser={"celina-lind"} discordUser={"hamlit1163"}/>
                </Container>
            </Col>
            </Row>
        </Container>
        </main>
    );
}