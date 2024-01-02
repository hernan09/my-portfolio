import React, { useRef, useState, useEffect } from 'react'
import { animated } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from './components/footer/footer.jsx';
import Proyects from './components/proyectos/proyects.jsx';
import yoImg from './assets/yoport.jpeg';
import angular from './assets/angular.svg';
import Css from './assets/css.svg';
import javascript from './assets/javascript.svg';
import github from './assets/github.svg'
import Sass from './assets/sass.svg';
import react from './assets/react.svg';
import vue from './assets/vue.svg';
import Node from './assets/nodejs.svg';
import Mongo from './assets/mongo.svg';
import Mysql from './assets/mysql.svg';
import html from './assets/html.svg';
import aws from './assets/aws.svg';
import kubernete from './assets/kubernete.svg';
import Redux from './assets/redux.svg';
import Vuex from './assets/vuex.svg';
import Material from './assets/material.svg';

import arrowDown from './assets/arrowdown.svg';
import './App.css';

export default function App() {
  const parallax = useRef();
  const disco = useRef();

  const valuesCard = [
    {img: react, description: 'React'},
    {img: vue, description: 'Vue'},
    {img: angular, description: 'Angular'},
    {img: Node, description: 'NodeJs'},
    {img: aws, description: 'AWS'},
    {img: Css, description: 'CSS'},
    {img: html, description: 'HTML'},
    {img: javascript, description: 'Javascript'},
    {img: Mongo, description: 'MongoDb'},
    {img: Mysql, description: 'Mysql'},
    {img: Sass, description: 'Sass'},
    {img: github, description: 'Github'},
    {img: kubernete, description: 'Kubernete'},
    {img: Redux, description: 'Redux'},
    {img: Vuex , description: 'Vuex'},
    {img: Material , description: 'MaterialUI'}

  ]

  

  useEffect(()=>{
   
    setTimeout(()=>{
      disco.current.classList.add('imagen-rotada')
    },2000)
  },[])


  return (
    <div className='content-main' style={{ width: '100%', height: '100%' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <animated.div
            style={{
              width: '90vw',
              margin:'auto',
              height: "auto",
              marginTop: 50,
              background: '#1c1b1b',
              borderRadius: '10px',
              padding:'40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '1000px',
              cursor:'pointer',
              position: 'relative',
              opacity:'0.9'
            }}
          > 
          <img className='arrow-down' src={arrowDown} />
          
          <div className={`contenedor`}>
            <img src={yoImg} className='disco' ref={disco}/>
          </div>
            
            <h3 className='span-title'>Desarrollador Full Stack <strong className='title-strong'>Mean/Mern/Mevn</strong></h3>
            <div className='content-text'>
              ¡Hola! Soy Hernán, un apasionado desarrollador Full Stack con experiencia en la creación de aplicaciones web robustas 
              y escalables utilizando los stacks MEAN, MERN y MEVN. Implemento 
               metodologías ágiles para maximizar la eficiencia y la flexibilidad en los procesos. Mi misión es transformar ideas innovadoras en soluciones tecnológicas 
              que no solo cumplan con las expectativas, sino que también superen las necesidades del usuario. 
            </div>
            <Footer></Footer>
          </animated.div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
          }}>
          <animated.div
            style={{
              width: '90vw',
              margin:'auto',
              height: 'auto',
              marginTop: 50,
              background: '#1c1b1b',
              borderRadius: '10px',
              display: 'flex',
              flexWrap:'wrap',
              flexDirection:'column',
              justifyContent:'center',
              maxWidth: '1000px',
              cursor:'pointer',
              position: 'relative',
              opacity:'0.9'
            }}
          > 
          <h2 className='title-tecnologies'>Tecnologías que domino</h2>
          <p className='text-tecnologies'>
            En esta sección, te presento un catálogo visual de las tecnologías en las que me perfecciono dia a dia.
          </p>
          <div className="section-2">
          <img className='arrow-down-2' src={arrowDown} />
             {valuesCard.map((item,index) => (
                <div key={index} className='card-container'>
                <img className='imge-icon' src={item.img} alt="..." />
                <p className='description'>{item.description}</p>
            </div>
             ))}
          </div>
            
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div
            className='div-section-pather'
            style={{
              width: '90vw',
              margin:'auto',
              height: "auto",
              marginTop: 50,
              background: '#1c1b1b',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '1000px',
              cursor:'pointer',
              position: 'relative',
              opacity:'0.9'
            }}
          > 
          <div className="section-3">
          <h2 className='title-section-3'>Mis Proyectos</h2>
          <p className='text-proyectos'>          
            ¡Explora mi Portafolio de Proyectos!
          </p>
          <img className='arrow-down' src={arrowDown} />
          <Proyects/>
          <span style={{color: 'rgb(130 131 131)',marginTop:'30px'}}>©Desarrollado por Hernan Sr</span>
          </div>
          </div>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  )
}
