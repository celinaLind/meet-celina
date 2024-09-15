import React from 'react';
import '../assets/style.css';
import { Container, Row, Col, Form, Card, Carousel, Button } from 'react-bootstrap';
import SocialMedia from './SocialMedia.js';
import Contact from './Contact.js';
import SupportMyFriends from './SupportMyFriends.js';
import Timeline from './Timeline.js';

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
            <SocialMedia email={"clind323@gmail.com"} linkedInUser={"celina-lind"} discordUser={"hamlit1163"} gitHubUser={'celinaLind'} />
          </Col>
          <Col>
            <Container className='d-flex justify-content-center mt-3' >
              <Col>
                <h3>Celina Lind</h3>
                <p>
                  Hi! Nice to meet you, my name is Celina. I'm a passionate computer science student on an exciting
                  journey toward earning my bachelor's degree, with plans to further my education through a master’s
                  in AI and Robotics. When I'm not immersed in coding and tech, you'll find me diving into a good
                  book, exploring new destinations, or cherishing moments with friends, family, and my two lovable
                  dogs. I’m dedicated to personal growth and continuously honing my coding skills as I navigate this
                  ever-evolving field.
                  {/* I have many titles: CS student, Headstarter Fellow, Junior Software Developer, aspiring French speaker. These titles are encouraged by my a passion for learning and creating new things. I am experienced in JavaScript, React, CSS and more. 
                    I am excited to continue learning and growing as a developer and as a person. */}
                </p>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container className='mt-3'>
        <Row>
          <Col>
            <h2 id='experience'>Experience</h2>
            <Timeline />
            <Button className='btn-primary' href={process.env.PUBLIC_URL + "/resume.pdf"} target='_blank'>My Resume</Button>
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
              <SocialMedia email={"clind323@gmail.com"} linkedInUser={"celina-lind"} discordUser={"hamlit1163"} />
            </Container>
          </Col>
        </Row>
      </Container>
    </main>
  );
}