import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: ['Flutter', 'Dart', 'PHP Laravel', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: 'State Management',
      skills: ['Bloc & Cubit', 'GetX', 'Provider'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Android Studio', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Git', 'Figma'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'Firebase', 'MongoDB', 'SQLite', 'SQL Server'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">02.</h2>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
