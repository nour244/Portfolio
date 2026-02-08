import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <span className="code-text">{'<'}Nour{'/>'}</span>
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')}><span className="code-text number">01.</span> Home</button></li>
          <li><button onClick={() => scrollToSection('about')}><span className="code-text number">02.</span> About</button></li>
          <li><button onClick={() => scrollToSection('skills')}><span className="code-text number">03.</span> Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}><span className="code-text number">04.</span> Projects</button></li>
          <li><button onClick={() => scrollToSection('experience')}><span className="code-text number">05.</span> Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')}><span className="code-text number">06.</span> Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
