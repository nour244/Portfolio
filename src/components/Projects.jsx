import React from 'react';
import './Projects.css';

const Projects = () => {
  const professionalProjects = [
    {
      id: 1,
      title: 'Financial Remittance Systems',
      type: 'Professional – Web Development',
      description: 'Developed secure and efficient web platforms for financial transactions for Al-Fouad & Mada Remittance Companies, focusing on data integrity and user-friendly interfaces.',
      technologies: ['PHP Laravel', 'Blade', 'MySQL'],
    },
    {
      id: 2,
      title: 'Wiki Exporter & Car Maintenance',
      type: 'Professional – Mobile Development',
      description: 'Wiki Exporter: UI development and API integration for exploring Syrian products. Car Maintenance: Designed UI and integrated APIs for a workshop assistance request system.',
      technologies: ['Flutter', 'Dart', 'REST APIs'],
    },
  ];

  const academicProjects = [
    {
      id: 3,
      title: 'Mdshw – Medicine Delivery App',
      type: 'Graduation Project (2022)',
      description: 'Mobile app for ordering medicine from nearby pharmacies during COVID-19; integrated delivery service.',
      technologies: ['Flutter', 'Spring Boot', 'MongoDB'],
    },
    {
      id: 4,
      title: 'Captain – Restaurant Management System',
      type: 'Academic Project (2022)',
      description: 'Streamlined restaurant operations: multi-role ordering, table booking, financial tracking, employee and customer management.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Angular', 'AI'],
    },
    {
      id: 5,
      title: 'UFC Sports Website',
      type: 'Academic Project (2019)',
      description: 'Responsive sports news & analysis website built with modern front-end technologies.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      id: 6,
      title: 'Blade Masters – Java Game',
      type: 'Academic Project (2019)',
      description: 'Strategic battle game implementing OOP and design patterns with MVC architecture and multithreading.',
      technologies: ['Java', 'MVC', 'Multithreading'],
    },
    {
      id: 7,
      title: 'Checkers Game – Android',
      type: 'Academic Project (2020)',
      description: 'AI-based mobile checkers game with decision-making algorithms using Minimax for intelligent gameplay.',
      technologies: ['Java', 'OOP', 'Minimax Algorithm'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">03.</h2>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>

        <h3 className="projects-category-title">Professional Projects</h3>
        <div className="projects-list">
          {professionalProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <p className="project-type code-text">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag code-text">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="projects-category-title">Graduation & Academic Projects</h3>
        <div className="projects-list">
          {academicProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <p className="project-type code-text">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag code-text">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
