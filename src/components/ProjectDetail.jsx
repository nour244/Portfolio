import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <p>Project not found.</p>
          <button className="back-btn" onClick={() => navigate('/')}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Portfolio
        </button>

        <div className="detail-hero" style={{ background: project.gradient }}>
          <div className="detail-hero-overlay">
            <div className="detail-hero-content">
              <span className="detail-type">{project.type}</span>
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-subtitle">{project.subtitle} &middot; {project.year}</p>
            </div>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="detail-hero-img"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        <div className="detail-body">
          <div className="detail-main">
            <div className="detail-section">
              <h2>Overview</h2>
              <p className="detail-description">{project.description}</p>
            </div>

            <div className="detail-section">
              <h2>Technologies</h2>
              <div className="detail-tech-list">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="detail-tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {project.github && (
              <div className="detail-section">
                <h2>Source Code</h2>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="detail-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View on GitHub
                </a>
              </div>
            )}
          </div>

          <div className="detail-sidebar">
            <div className="detail-card">
              <h3>Challenges</h3>
              <ul>
                {project.challenges.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h3>Achievements</h3>
              <ul>
                {project.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h3>What I Learned</h3>
              <ul>
                {project.learnings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
