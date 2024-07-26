import React from 'react';
import '../assets/style.css';
import { Container, Row, Col, Form, Card, Carousel } from 'react-bootstrap';
import SocialMedia from './SocialMedia.js';
import { useMediaQuery } from 'react-responsive';
// will look into embedding social media posts later
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

export default function Home() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const carouselItems = [
        {
            title: 'Catilixia',
            text: 'A streamer who plays Call of Duty Modern Warfare. She is a talented gamer with a passion for streaming and creating content. Please check out her social media links below.',
            socialMediaProps: {
                discordChannel: '/sKmA66K6',
                tiktokUser: 'catilixia',
                instagramUser: 'catalixiah',
                twitchUser: 'catalixiah',
                youtubeUser: 'catalixiahh'
            }
        },
        {
            title: 'Crochet Adventures',
            text: 'Crochet Adventures is an up and coming crochet artist who creates beautiful crochet pieces. Watch her journey by checking out her social media links below.',
            socialMediaProps: {
                instagramUser: 'cleo.n.crochet'
            }
        }
    ];

    const renderItems = (item, index) => (
        <Col key={index} md={6}>
            <Card>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <SocialMedia {...item.socialMediaProps} />
                </Card.Body>
            </Card>
        </Col>
    );


    return (
        <main>
        <Container className='mt-3'>
            <Row>
            <Col className='rotating-border'>
                <h2>Hi Friend!</h2>
                <h4 className='intro'>Get to know Celina,</h4>
                <h4 className="typewriter descriptive-text">talented software developer.</h4>
                <SocialMedia />
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
        <Container className='mt-3'>
            <h2 id='contact-me'>Contact Me</h2>
            <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your name' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder='Enter your message' />
            </Form.Group>
            <button type='submit'>Submit</button>
            </Form>
        </Container>
        <Container className='mt-3'>
            <h2 id='support'>Support My Friends</h2>
            {/* Create a carousel of cards where each card has friends name, brief description of what they do, and their social media links */}
            {/* <Carousel> <TikTokEmbed className='float-left' url="https://www.tiktok.com/@epicgardening/video/7055411162212633903" width={250} /> */}
            {isSmallScreen || carouselItems.length <= 2 ? (
                    <Row>
                        {carouselItems.map((item, index) => renderItems(item, index))}
                    </Row>
                ) : (
                    <Carousel>
                        {carouselItems.map((item, index) => (
                           <Carousel.Item key={index}>
                           <Row>
                               {renderItems(item, index)}
                               {index % 2 === 0 && carouselItems[index + 1] && renderItems(carouselItems[index + 1], index + 1)}
                           </Row>
                       </Carousel.Item>
                        ))}
                    </Carousel>
                )}
        </Container>
        </main>
    );
}