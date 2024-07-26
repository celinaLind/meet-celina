import React from "react";
import { Container, Form } from "react-bootstrap";

export default function Contact() {
    return (
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
    );
}