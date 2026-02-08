import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting code-text">Hi, my name is</p>
        <h1 className="hero-name">Nour Esam Ghazi</h1>
        <h2 className="hero-title">Software Project Manager & IT Engineer</h2>
        <h3 className="hero-subtitle">Software Engineer | Flutter Specialist | Full-Stack Web Developer</h3>
        <p className="hero-description">
          Crafting high-performance mobile applications and robust web solutions
          with a focus on scalable architecture and seamless user experience.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <a href="#" className="btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
