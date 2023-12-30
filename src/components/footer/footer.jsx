import React from 'react';
import './footer.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import Instagram from '../../assets/insta.svg';


const footer = () => {
    return (
        <div className='footer-main'>
        <a href="https://www.linkedin.com/in/hernán-gomez/" target="_blank" rel="noopener noreferrer">
          <img className='imgen-icon' src={linkedin} alt="LinkedIn"/>
        </a>
        <a href="https://github.com/hernan09" target="_blank" rel="noopener noreferrer">
          <img className='imgen-icon' src={github} alt="GitHub"/>
        </a>
        <a href="https://www.instagram.com/hernan.dario09/" target="_blank" rel="noopener noreferrer">
          <img className='imgen-icon' src={Instagram} alt="Instagram"/>
        </a>
        </div>
    );
};

export default footer;