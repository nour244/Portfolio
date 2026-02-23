import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05 }
    );

    const items = sectionRef.current?.querySelectorAll('.timeline-item, .education-card, .cert-item, .volunteer-item, .language-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer with Project Management Responsibilities',
      company: 'Al-Fouad Remittance Company',
      period: 'April 2025 - Present',
      location: 'Damascus, Syria',
      description: [
        'Developed the corporate Remittance Website using PHP Laravel (Blade, MySQL, JavaScript)',
        'Built dynamic Admin Dashboard with real-time exchange rate management and financial reporting',
        'Coordinated UAT testing for Digital Wallet system with external vendors',
        'Managed RemitCom integration testing and vendor communication',
        'Implemented role-based access control and branch management system',
        'Applied PMP methodology for project lifecycle coordination and stakeholder management',
        'Oversaw technical operations and IT infrastructure management',
      ],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Mada Money Transfer (Freelance)',
      period: 'April 2025 - September 2025',
      location: 'Damascus, Syria',
      description: [
        'Developed the corporate website dynamically using PHP Laravel and Blade',
        'Built dynamic Admin Dashboard with real-time exchange rate management',
        'Implemented branch management system and complaint management system',
        'Applied role-based access control for secure administration',
        'Managed backend logic and database structure',
        'Deployed system to production server',
        'Applied PMP practices to coordinate requirements and validate workflows',
      ],
    },
    {
      id: 3,
      title: 'Junior Flutter Developer',
      company: 'American Company',
      period: 'Aug 2023 - Jan 2025',
      location: 'Remote',
      description: [
        'Developed Wiki Exporter app for exploring Syrian products with UI development and API integration',
        'Created Car Maintenance app for workshop assistance request system',
        'Collaborated with cross-functional teams to deliver high-quality mobile applications',
        'Implemented clean architecture with Bloc and Provider state management patterns',
      ],
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Emmatel',
      period: 'Feb 2022 - Jul 2023',
      location: 'Damascus, Syria',
      description: [
        'Analyzed multi-branch sales data for electronic devices, generating actionable insights',
        'Sales performance analysis per branch, employee, and device type',
        'Designed dashboards and reports (monthly & yearly) for management',
        'Identified performance gaps and recommended improvements',
        'Supported data-driven decision making across the organization',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor of Software Engineering',
    university: 'Damascus University',
    period: '2018 - 2022',
    grade: 'Very Good (75.26%)',
    recommendation: 'Official recommendation letter from Damascus University',
    recommendationLink: 'https://drive.google.com/file/d/1YNel57K5PD0QDHXIBVadGiNVXsafzIGO/view?usp=sharing',
  };

  const certifications = [
    {
      title: 'SQL Server Querying',
      org: 'Tomah Team, Damascus University',
      period: 'Oct - Nov 2018',
      link: 'https://drive.google.com/file/d/1K2b8CjVz9nN7x3Qk5mLp6wR4tY8uI0o/view',
    },
    {
      title: 'Android Development Fundamentals',
      org: 'Tomah Team',
      period: 'Oct - Nov 2018',
      link: 'https://drive.google.com/file/d/1K2b8CjVz9nN7x3Qk5mLp6wR4tY8uI0o/view',
    },
    {
      title: 'Front-End Web Development',
      org: 'Tomah Team',
      period: 'Jun 2019',
      link: 'https://drive.google.com/file/d/1K2b8CjVz9nN7x3Qk5mLp6wR4tY8uI0o/view',
    },
    {
      title: 'Office Management',
      org: 'Syria Trust for Development',
      period: 'Jul 2018',
    },
    {
      title: 'Fundamentals of Management, Quality & International Standards',
      org: 'Syria Trust for Development',
      period: 'Aug 2018',
    },
  ];

  const volunteering = [
    {
      id: 1,
      organization: 'Screen IT - Damascus University',
      period: 'Mar 2019 - Apr 2021',
      role: 'Workshop Leader',
      description: 'Led workshops for high school students transitioning into informatics studies. Explained theoretical and practical software concepts through real-world projects.',
      certLink: 'https://drive.google.com/file/d/1sRt5vX2wQ3eZ7yU8iO9pA0bC4dF6gH1j/view',
    },
    {
      id: 2,
      organization: 'Red Blood Cells Team - Damascus University',
      period: 'Feb 2019 - Jul 2020',
      role: 'Content Creator & Proofreader',
      description: 'Created and proofread scientific content from university lectures to serve as an academic reference for students. Provided free electronic educational materials.',
      certLink: 'https://drive.google.com/file/d/1tUv6wX3yZ4aB5cD7eF8gH9iJ0kL1mN2o/view',
    },
  ];

  const languages = [
    { lang: 'Arabic', level: 'Native' },
    { lang: 'English', level: 'B2 Reading / B2 Listening / B1 Writing / B1 Speaking' },
    { lang: 'German', level: 'A2' },
  ];

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">04.</h2>
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-grid">
          <div className="experience-section">
            <h3 className="subsection-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="exp-title">{exp.title}</h4>
                    <p className="exp-company code-text">{exp.company}</p>
                    <p className="exp-period">{exp.period} &bull; {exp.location}</p>
                    <ul className="exp-description">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-card">
              <h4 className="edu-degree">{education.degree}</h4>
              <p className="edu-university code-text">{education.university}</p>
              <p className="edu-period">{education.period}</p>
              <p className="edu-grade">Grade: <span className="highlight">{education.grade}</span></p>
              <p className="edu-recommendation">
                {education.recommendationLink ? (
                  <a href={education.recommendationLink} target="_blank" rel="noopener noreferrer" className="cert-link">
                    {education.recommendation}
                  </a>
                ) : (
                  education.recommendation
                )}
              </p>
            </div>

            <h3 className="subsection-title" style={{ marginTop: '2rem' }}>Training & Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <h4 className="cert-title">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">{cert.title}</a>
                    ) : (
                      cert.title
                    )}
                  </h4>
                  <p className="cert-org code-text">{cert.org}</p>
                  <p className="cert-period">{cert.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-grid" style={{ marginTop: '3rem' }}>
          <div className="experience-section">
            <h3 className="subsection-title">Volunteering & Leadership</h3>
            <div className="volunteering-list">
              {volunteering.map((vol) => (
                <div key={vol.id} className="volunteer-item">
                  <h4 className="vol-role">{vol.role}</h4>
                  <p className="vol-org code-text">{vol.organization}</p>
                  <p className="vol-period">{vol.period}</p>
                  <p className="vol-description">{vol.description}</p>
                  {vol.certLink && (
                    <a href={vol.certLink} target="_blank" rel="noopener noreferrer" className="cert-link vol-cert-link">
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3 className="subsection-title">Language Skills</h3>
            <div className="languages-list">
              {languages.map((item, index) => (
                <div key={index} className="language-item">
                  <h4 className="lang-name">{item.lang}</h4>
                  <p className="lang-level code-text">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
