import React from 'react';
import '../assets/style.css';
import '../App.css';
import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Container className='d-flex justify-content-space-between'>
      <h1>My Wonderland</h1>
      <nav>
        <ul className='navigation'>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#contact-me'>Reach Out</a></li>
          <li><a href='#support'>My Friends</a></li>
        </ul>
      </nav>
      </Container>
    </header>
  );
}