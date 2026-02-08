import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Project Manager & IT Engineer',
      company: 'Al-Fouad Remittance Company',
      period: 'April 2025 - Present',
      location: 'Damascus, Syria',
      description: [
        'Managing software development projects and overseeing project lifecycles',
        'Leading IT infrastructure and technical operations',
        'Coordinating between development teams and stakeholders to ensure project delivery',
        'Implementing best practices in software project management and IT operations',
      ],
    },
    {
      id: 2,
      title: 'Junior Flutter Developer',
      company: 'American Company',
      period: '2023 - 2025',
      location: 'Remote',
      description: [
        'Developed Wiki Exporter app for exploring Syrian products with UI development and API integration',
        'Created Car Maintenance app for workshop assistance request system',
        'Collaborated with cross-functional teams to deliver high-quality mobile applications',
      ],
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Emmatel',
      period: '2022 - 2023',
      location: 'Damascus, Syria',
      description: [
        'Specialized in sales trend analysis and marketing impact reports',
        'Provided data-driven insights for business decision making',
        'Received official letter of recommendation for excellence in data analysis',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor of Software Engineering',
    university: 'Damascus University',
    period: '2018 - 2022',
    grade: 'Very Good (75.26%)',
    recommendation: 'Official recommendation letter from Damascus University',
  };

  const volunteering = [
    {
      id: 1,
      organization: 'Screen IT',
      period: '2019 - 2021',
      role: 'Workshop Leader',
      description: 'Led workshops for high school students, explaining theoretical and practical software concepts',
    },
    {
      id: 2,
      organization: 'Red Blood Cells Team',
      period: '2019 - 2020',
      role: 'Content Creator',
      description: 'Created and proofread scientific content to serve as academic references for students',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">04.</h2>
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-grid">
          {/* Professional Experience */}
          <div className="experience-section">
            <h3 className="subsection-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="exp-title">{exp.title}</h4>
                    <p className="exp-company code-text">{exp.company}</p>
                    <p className="exp-period">{exp.period} • {exp.location}</p>
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

          {/* Education */}
          <div className="experience-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-card">
              <h4 className="edu-degree">{education.degree}</h4>
              <p className="edu-university code-text">{education.university}</p>
              <p className="edu-period">{education.period}</p>
              <p className="edu-grade">Grade: <span className="highlight">{education.grade}</span></p>
              <p className="edu-recommendation">{education.recommendation}</p>
            </div>

            <h3 className="subsection-title" style={{ marginTop: '2rem' }}>Volunteering & Leadership</h3>
            <div className="volunteering-list">
              {volunteering.map((vol) => (
                <div key={vol.id} className="volunteer-item">
                  <h4 className="vol-role">{vol.role}</h4>
                  <p className="vol-org code-text">{vol.organization}</p>
                  <p className="vol-period">{vol.period}</p>
                  <p className="vol-description">{vol.description}</p>
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
