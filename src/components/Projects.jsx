import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Mdshw – Medicine Delivery App',
      type: 'Graduation Project',
      description: 'A mobile solution for ordering medicine from nearby pharmacies with delivery service, developed as a response to the COVID-19 pandemic.',
      technologies: ['Flutter', 'Spring Boot', 'MongoDB'],
      github: '#',
    },
    {
      id: 2,
      title: 'Captain – Restaurant Management System',
      type: 'Full-Stack Project',
      description: 'Multi-user system for managing restaurant operations, employee tracking, and customer feedback with AI integration.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Angular', 'AI'],
      github: '#',
    },
    {
      id: 3,
      title: 'Financial Remittance Systems',
      type: 'Web Development',
      description: 'Developed secure and efficient web platforms for financial transactions for Al-Fouad & Mada Remittance Companies, focusing on data integrity and user-friendly interfaces.',
      technologies: ['PHP Laravel', 'Blade', 'MySQL'],
      github: '#',
    },
    {
      id: 4,
      title: 'Wiki Exporter & Car Maintenance',
      type: 'Mobile Development',
      description: 'Wiki Exporter: UI development and API integration for exploring Syrian products. Car Maintenance: Designed UI and integrated APIs for a workshop assistance request system.',
      technologies: ['Flutter', 'Dart', 'REST APIs'],
      github: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">03.</h2>
          <h2 className="section-title">Professional Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
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
                <a href={project.github} className="project-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
