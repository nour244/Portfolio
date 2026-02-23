import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting code-text">Hi, my name is</p>
        <h1 className="hero-name">Nour Esam Ghazi.</h1>
        <h2 className="hero-tagline">I build things for the web & mobile.</h2>
        <p className="hero-description">
          Results-oriented Software Engineer with 3+ years of experience in Flutter mobile development,
          PHP Laravel web applications, and software project coordination within fintech environments.
          Specialized in designing digital wallet systems, remittance platforms, and enterprise admin
          dashboards that support critical financial operations.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </button>
          <a href="/Nour_Esam_Ghazi_CV.pdf" download className="btn-ghost">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
