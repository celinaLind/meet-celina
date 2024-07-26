import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        const mailtoLink = `mailto:clind323@gmail.com?subject=Personal%20Site%20Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <Container className='mt-3'>
            <h2 id='contact-me'>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Enter your name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type='email' placeholder='Enter your email' />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Control className='mt-2 mb-2' as='textarea' rows={3} placeholder='Enter your message' />
                </Form.Group>
                <Button className='primary-bg' size="lg" type='submit'>Submit</Button>
            </Form>
        </Container>
    );
}