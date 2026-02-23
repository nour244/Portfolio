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
          Results-oriented Software Engineer with 3+ years of experience in Flutter mobile development,
          PHP Laravel web applications, and software project coordination within fintech environments.
          Specialized in designing and implementing digital wallet systems, remittance platforms,
          and enterprise admin dashboards that support critical financial operations.
        </p>
        <p className="hero-description hero-description-secondary">
          Proven ability to analyze complex business and technical requirements, conduct User Acceptance
          Testing (UAT), and collaborate effectively with cross-functional teams. Passionate about building
          reliable financial systems, optimizing user experience, and continuously learning modern software
          architecture and project management practices.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <a href="mailto:e.nourghazi99@gmail.com" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
