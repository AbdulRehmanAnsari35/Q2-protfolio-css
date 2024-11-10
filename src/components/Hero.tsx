import React from 'react'
import Navbar from './Navbar'
import '../app/styles/Hero.css';

const Hero = () => {
  return (
    <div id="Hero" className='hero-container'>
      <Navbar />
      <div className='hero-content'>
        <div className='hero-div'></div>

        <div className='hero-text'>
          <div className="hero-msin"> 
            <p data-aos="zoom-in-down">I am</p>
            <p data-aos="zoom-in-down">Abdul</p>
            <p data-aos="zoom-in-down">Rehman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
