import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">01.</h2>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a <span className="highlight">Software Engineering graduate</span> from Damascus University
              with a grade of 'Very Good' (75.26%). I specialize in the application lifecycle, from architecture
              and design patterns to state management and API integration.
            </p>
            <p>
              My experience spans over 3 years in <span className="highlight">Flutter development</span>,
              complemented by a strong background in web development using <span className="highlight">Laravel</span>.
              I thrive in collaborative environments and am passionate about delivering innovative tech solutions
              that solve real-world problems.
            </p>
            <p>Here are some technologies I've been working with recently:</p>
            <ul className="tech-list">
              <li>Flutter & Dart</li>
              <li>Laravel (PHP)</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>MySQL</li>
              <li>Git</li>
            </ul>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <img src="/profile.jpeg" alt="Nour Esam Ghazi" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
