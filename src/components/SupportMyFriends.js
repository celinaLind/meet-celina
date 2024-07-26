import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import SocialMedia from './SocialMedia.js';

export default function SupportMyFriends() {
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
    );
}