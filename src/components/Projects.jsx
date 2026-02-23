import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = gridRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">03.</h2>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="project-cover" style={{ background: project.gradient }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-cover-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="project-cover-overlay">
                  <span className="project-year">{project.year}</span>
                  <span className="project-view-label">View Details</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-tech-row">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-pill tech-more">+{project.technologies.length - 3}</span>
                  )}
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
