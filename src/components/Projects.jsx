import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Financial Remittance Platform',
      subtitle: 'Al-Fouad & Mada Companies',
      type: 'Web Platform',
      year: '2025',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Secure web platforms for financial transactions with enterprise admin dashboards, real-time exchange rate management, and role-based access control.',
      technologies: ['PHP Laravel', 'Blade', 'MySQL', 'JavaScript'],
      challenges: [
        'Handling sensitive financial data with strict security requirements',
        'Building real-time exchange rate management with instant updates',
        'Implementing role-based access control across multiple admin levels',
      ],
      achievements: [
        'Deployed production-ready remittance platform serving real users',
        'Built comprehensive admin dashboard with real-time data management',
        'Automated exchange rate workflows reducing manual operations',
      ],
      learnings: [
        'Fintech security standards and best practices',
        'Advanced Laravel architecture patterns for enterprise applications',
        'PMP methodology in software project coordination',
      ],
    },
    {
      id: 2,
      title: 'Wiki Exporter',
      subtitle: 'American Company',
      type: 'Mobile App',
      year: '2023-2025',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Mobile application for exploring Syrian products with rich UI development and seamless API integration, built with clean architecture principles.',
      technologies: ['Flutter', 'Dart', 'REST APIs', 'Bloc'],
      challenges: [
        'Complex state management across multiple app modules',
        'Integrating third-party APIs with varying response structures',
        'Optimizing app performance for low-bandwidth environments',
      ],
      achievements: [
        'Delivered production mobile application from concept to deployment',
        'Implemented clean architecture with Bloc pattern',
        'Achieved smooth UI/UX with optimized rendering',
      ],
      learnings: [
        'Mastered Flutter state management patterns',
        'Remote team collaboration and agile workflows',
        'API integration best practices',
      ],
    },
    {
      id: 3,
      title: 'Car Maintenance System',
      subtitle: 'American Company',
      type: 'Mobile App',
      year: '2023-2025',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Workshop assistance request system with real-time communication, service tracking, and user-friendly interface for both customers and service providers.',
      technologies: ['Flutter', 'Dart', 'REST APIs', 'Provider'],
      challenges: [
        'Real-time service request and tracking system',
        'Multi-role interface for customers and workshops',
        'Location-based service matching',
      ],
      achievements: [
        'Built complete service request lifecycle management',
        'Implemented real-time status updates and notifications',
        'Designed intuitive UI for non-technical users',
      ],
      learnings: [
        'Service-oriented architecture in mobile apps',
        'Real-time communication patterns',
        'User experience design for diverse audiences',
      ],
    },
    {
      id: 4,
      title: 'Mdshw',
      subtitle: 'Graduation Project',
      type: 'Medicine Delivery',
      year: '2022',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      description: 'Mobile application for ordering medicine from nearby pharmacies during COVID-19, featuring integrated delivery service and real-time order tracking.',
      technologies: ['Flutter', 'Spring Boot', 'MongoDB'],
      challenges: [
        'Building real-time delivery tracking with location services',
        'Integrating pharmacy inventory with order system',
        'Ensuring reliability during high-demand COVID-19 period',
      ],
      achievements: [
        'Defended as graduation project with high marks',
        'Implemented complete order lifecycle system',
        'Built scalable backend handling concurrent requests',
      ],
      learnings: [
        'Full-stack mobile development end-to-end',
        'NoSQL database design with MongoDB',
        'Real-time data synchronization',
      ],
    },
    {
      id: 5,
      title: 'Captain',
      subtitle: 'Academic Project',
      type: 'Restaurant System',
      year: '2022',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      description: 'Restaurant management platform with multi-role ordering, table booking, financial tracking, and AI-powered menu recommendations.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Angular', 'AI'],
      challenges: [
        'Multi-role access system (admin, waiter, chef, customer)',
        'Real-time order sync between kitchen and floor staff',
        'AI integration for menu recommendations',
      ],
      achievements: [
        'Built multi-platform solution (mobile + web admin)',
        'Real-time order tracking with WebSocket connections',
        'AI-powered recommendation engine',
      ],
      learnings: [
        'Complex multi-role architecture design',
        'Full-stack development with multiple stacks',
        'AI integration in business applications',
      ],
    },
    {
      id: 6,
      title: 'Checkers Game',
      subtitle: 'Academic Project',
      type: 'Android Game',
      year: '2020',
      gradient: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)',
      description: 'AI-based mobile checkers game with Minimax algorithm for intelligent decision-making, featuring multiple difficulty levels and polished game UI.',
      technologies: ['Java', 'OOP', 'Minimax Algorithm', 'Android SDK'],
      challenges: [
        'Optimizing Minimax for mobile performance',
        'Implementing alpha-beta pruning',
        'Creating intuitive touch-based interactions',
      ],
      achievements: [
        'Built competitive AI with configurable difficulty',
        'Optimized algorithm for smooth gameplay',
        'Designed clean touch-based board interface',
      ],
      learnings: [
        'AI algorithms and game theory',
        'Algorithm optimization for mobile',
        'Android development with custom views',
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">03.</h2>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-cover" style={{ background: project.gradient }}>
                <div className="project-cover-overlay">
                  <span className="project-year">{project.year}</span>
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

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header" style={{ background: selectedProject.gradient }}>
              <div className="modal-header-content">
                <span className="modal-type">{selectedProject.type}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.subtitle} &middot; {selectedProject.year}</p>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-technologies">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech">{tech}</span>
                ))}
              </div>

              <div className="modal-sections">
                <div className="modal-section">
                  <h4>Challenges</h4>
                  <ul>
                    {selectedProject.challenges.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Achievements</h4>
                  <ul>
                    {selectedProject.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>What I Learned</h4>
                  <ul>
                    {selectedProject.learnings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
