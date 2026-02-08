import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Bloc & Cubit', 'GetX', 'Provider'],
    },
    {
      category: 'Web Development',
      skills: ['PHP (Laravel)', 'Blade Engine', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      category: 'Languages & Backend',
      skills: ['Java', 'SQL'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'SQLite'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Postman', 'Android Studio', 'VS Code', 'Microsoft Office', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-number code-text">02.</h2>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item code-text">{skill}</span>
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
