import React from 'react';
import './proyects.css';
import react from '../../assets/linkedin.svg';

const proyects = () => {
    const proyectos = [
        { title: 'El Verde App', url: 'https://elverde-app.vercel.app/' },
        { title: 'Music App', url: 'https://music-app-ten-kohl.vercel.app/' },
        { title: 'What Pokemon App ', url: 'https://whatpokemon.vercel.app/' },
        { title: 'TCG Pokemon App', url: 'https://tcgpokecard.vercel.app/' },
        { title: 'Platform engine App', url: 'https://search-engines-tv.vercel.app/' },
        { title: 'Pokenext App', url: 'https://pokenext-gray.vercel.app/' }
      ]
    return (
        <div  className='content-proyects'>
          <ul>
            <li className='list-item'>
              <a href="https://elverde-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              El Verde App
              </a>
            </li>
            <li className='list-item'>
              <a href="https://music-app-ten-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">
                Music App
              </a>
            </li>
            <li className='list-item'>
              <a href="https://whatpokemon.vercel.app/" target="_blank" rel="noopener noreferrer">
               What Pokemon App
              </a>
            </li>
            <li className='list-item'>
              <a href="https://tcgpokecard.vercel.app/" target="_blank" rel="noopener noreferrer">
               TCG Pokemon App
              </a>
            </li>
            <li className='list-item'>
              <a href="https://search-engines-tv.vercel.app/" target="_blank" rel="noopener noreferrer">
               Platform engine App
              </a>
            </li>
            <li className='list-item'>
              <a href="https://pokenext-gray.vercel.app/" target="_blank" rel="noopener noreferrer">
               Pokenext App
              </a>
            </li>
          </ul>
           
        
        </div>
    );
};

export default proyects;