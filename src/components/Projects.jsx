import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const professionalProjects = [
    {
      id: 1,
      title: 'Financial Remittance Systems',
      type: 'Professional – Web Development',
      company: 'Al-Fouad & Mada Remittance Companies',
      period: '2025',
      description: 'Developed secure and efficient web platforms for financial transactions, focusing on data integrity, user-friendly interfaces, and enterprise-grade admin dashboards.',
      technologies: ['PHP Laravel', 'Blade', 'MySQL', 'JavaScript'],
      icon: '💰',
      challenges: [
        'Handling sensitive financial data with strict security requirements',
        'Building real-time exchange rate management with instant updates',
        'Implementing role-based access control across multiple admin levels',
      ],
      achievements: [
        'Successfully deployed production-ready remittance platform',
        'Built comprehensive admin dashboard with real-time data management',
        'Implemented secure authentication and authorization system',
        'Reduced manual operations by automating exchange rate workflows',
      ],
      learnings: [
        'Deep understanding of fintech security standards and best practices',
        'Advanced Laravel architecture patterns for enterprise applications',
        'PMP methodology application in real-world software project coordination',
      ],
    },
    {
      id: 2,
      title: 'Wiki Exporter & Car Maintenance',
      type: 'Professional – Mobile Development',
      company: 'American Company (Remote)',
      period: '2023 - 2025',
      description: 'Wiki Exporter: Exploring Syrian products with rich UI and API integration. Car Maintenance: Workshop assistance request system with real-time communication.',
      technologies: ['Flutter', 'Dart', 'REST APIs', 'Bloc'],
      icon: '📱',
      challenges: [
        'Complex state management across multiple app modules',
        'Integrating third-party APIs with varying response structures',
        'Optimizing app performance for low-bandwidth environments',
      ],
      achievements: [
        'Delivered two production mobile applications from concept to deployment',
        'Implemented clean architecture with Bloc pattern for maintainable codebase',
        'Achieved smooth UI/UX with optimized rendering and lazy loading',
      ],
      learnings: [
        'Mastered Flutter state management patterns (Bloc, Cubit)',
        'Remote team collaboration and agile development workflows',
        'API integration best practices and error handling strategies',
      ],
    },
  ];

  const academicProjects = [
    {
      id: 3,
      title: 'Mdshw – Medicine Delivery App',
      type: 'Graduation Project (2022)',
      description: 'Mobile application for ordering medicine from nearby pharmacies during COVID-19, featuring integrated delivery service and real-time order tracking.',
      technologies: ['Flutter', 'Spring Boot', 'MongoDB'],
      icon: '💊',
      challenges: [
        'Building real-time delivery tracking with location services',
        'Integrating pharmacy inventory management with order system',
        'Ensuring reliability during high-demand COVID-19 period',
      ],
      achievements: [
        'Successfully defended as graduation project with high marks',
        'Implemented complete order lifecycle: browse, order, track, deliver',
        'Built scalable backend architecture handling concurrent requests',
      ],
      learnings: [
        'Full-stack mobile development from design to deployment',
        'NoSQL database design patterns with MongoDB',
        'Real-time data synchronization techniques',
      ],
    },
    {
      id: 4,
      title: 'Captain – Restaurant Management System',
      type: 'Academic Project (2022)',
      description: 'Comprehensive restaurant operations platform: multi-role ordering, table booking, financial tracking, employee and customer management with AI recommendations.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Angular', 'AI'],
      icon: '🍽️',
      challenges: [
        'Designing multi-role access system (admin, waiter, chef, customer)',
        'Real-time order synchronization between kitchen and floor staff',
        'Integrating AI for menu recommendations based on user preferences',
      ],
      achievements: [
        'Built complete multi-platform solution (mobile + web admin)',
        'Implemented real-time order tracking with WebSocket connections',
        'Integrated AI-powered recommendation engine for personalized menus',
      ],
      learnings: [
        'Complex multi-role architecture design and implementation',
        'Full-stack development with multiple technology stacks',
        'AI integration in practical business applications',
      ],
    },
    {
      id: 5,
      title: 'UFC Sports Website',
      type: 'Academic Project (2019)',
      description: 'Responsive sports news and analysis website built with modern front-end technologies, featuring dynamic content layout and mobile-first design.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap'],
      icon: '🥊',
      challenges: [
        'Creating responsive layouts for diverse screen sizes',
        'Implementing dynamic content grids with CSS Grid and Flexbox',
      ],
      achievements: [
        'Built fully responsive website with mobile-first approach',
        'Implemented modern CSS techniques for engaging visual design',
      ],
      learnings: [
        'Responsive web design principles and best practices',
        'CSS Grid and Flexbox layout mastery',
        'Bootstrap framework for rapid UI development',
      ],
    },
    {
      id: 6,
      title: 'Blade Masters – Java Game',
      type: 'Academic Project (2019)',
      description: 'Strategic battle game implementing OOP principles and design patterns with MVC architecture, multithreading for smooth gameplay, and AI opponents.',
      technologies: ['Java', 'MVC', 'Multithreading', 'Design Patterns'],
      icon: '⚔️',
      challenges: [
        'Implementing smooth real-time gameplay with multithreading',
        'Designing extensible game architecture using design patterns',
        'Balancing AI difficulty for engaging player experience',
      ],
      achievements: [
        'Successfully implemented Strategy and Observer design patterns',
        'Built thread-safe game engine with concurrent operations',
        'Created intelligent AI opponents with varying difficulty levels',
      ],
      learnings: [
        'Advanced OOP concepts and SOLID principles',
        'Design patterns application in real-world scenarios',
        'Java multithreading and concurrent programming',
      ],
    },
    {
      id: 7,
      title: 'Checkers Game – Android',
      type: 'Academic Project (2020)',
      description: 'AI-based mobile checkers game with intelligent decision-making using Minimax algorithm, featuring multiple difficulty levels and polished UI.',
      technologies: ['Java', 'OOP', 'Minimax Algorithm', 'Android SDK'],
      icon: '♟️',
      challenges: [
        'Optimizing Minimax algorithm for mobile performance constraints',
        'Implementing alpha-beta pruning for efficient game tree search',
        'Creating intuitive touch-based game interactions',
      ],
      achievements: [
        'Built competitive AI with configurable difficulty levels',
        'Optimized algorithm performance for smooth mobile gameplay',
        'Designed clean, intuitive UI for touch-based board interaction',
      ],
      learnings: [
        'AI algorithms and game theory fundamentals',
        'Algorithm optimization for resource-constrained environments',
        'Android development with custom game views',
      ],
    },
  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const ProjectCard = ({ project }) => {
    const isExpanded = expandedProject === project.id;

    return (
      <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
        <div className="project-card-header" onClick={() => toggleProject(project.id)}>
          <div className="project-icon">{project.icon}</div>
          <div className="project-header-info">
            <p className="project-type code-text">{project.type}</p>
            <h3 className="project-title">{project.title}</h3>
            {project.company && <p className="project-company">{project.company}</p>}
          </div>
          <button className={`expand-btn ${isExpanded ? 'rotated' : ''}`} aria-label="Toggle details">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="project-content">
          <p className="project-description">{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag code-text">{tech}</span>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="project-details">
            <div className="detail-section">
              <div className="detail-header">
                <span className="detail-icon">⚡</span>
                <h4>Challenges</h4>
              </div>
              <ul className="detail-list">
                {project.challenges.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <div className="detail-header">
                <span className="detail-icon">🏆</span>
                <h4>Achievements</h4>
              </div>
              <ul className="detail-list">
                {project.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <div className="detail-header">
                <span className="detail-icon">📚</span>
                <h4>What I Learned</h4>
              </div>
              <ul className="detail-list">
                {project.learnings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <h3 className="projects-category-title">Graduation & Academic Projects</h3>
        <div className="projects-list">
          {academicProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
