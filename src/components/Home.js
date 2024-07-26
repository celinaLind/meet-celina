import React from 'react';
import '../assets/style.css';
import { Container, Row, Col, Form, Card, Carousel } from 'react-bootstrap';
import SocialMedia from './SocialMedia.js';
import Contact from './Contact.js';
import SupportMyFriends from './SupportMyFriends.js';

// will look into embedding social media posts later
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

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
                <Container className='d-flex justify-content-center' >
                </Container>
            </Col>
            </Row>
        </Container>
        <Container className='mt-3'>
            <Row>
            <Col>
                <h2 id='about'>About Me</h2>
                <p>
                I am a software developer with a passion for learning and creating new things. I am experienced in JavaScript, React, and Ruby on Rails. I am currently learning Python and Django. I am excited to continue learning and growing as a developer.
                </p>
            </Col>
            </Row>
        </Container>
        <Container className='mt-3'>
            <Row>
            <Col>
                <h2 id='experience'>Experience</h2>
                <p>
                I have experience working in a team environment and collaborating with others. I have experience working on projects from start to finish. I have experience working with databases and APIs. I have experience working with front-end and back-end technologies.
                </p>
            </Col>
            </Row>
        </Container>
        <SupportMyFriends />
        <hr className='rotationalBorder' />
        <Container className='contact-section mt-3'>
            <Row>
            <Col>
            <h4 id='contact-me'>Contact Me</h4>
            <Contact />
            </Col>
            <Col>
                <h4>Personal Information</h4>
                <p>Celina Lind</p> 
                <p>Based in Las Vegas, NV</p>
                <SocialMedia email={"clind323@gmail.com"} linkedInUser={"celina-lind"} discordUser={"hamlit1163"}/>
            </Col>
            </Row>
        </Container>
        </main>
    );
}