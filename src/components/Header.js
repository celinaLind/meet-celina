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
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#contact-me'>Contact</a></li>
          <li><a href='#support'>Friends</a></li>
        </ul>
      </nav>
      </Container>
    </header>
  );
}