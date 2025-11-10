import React, { useEffect, useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    "Languages": ["JavaScript", "Python", "C", "C++", "HTML", "CSS", "Racket"],
    "Frameworks": ["React", "Pygame"],
    "Cloud": ["AWS Amplify", "DynamoDB", "Lambda", "Cognito"],
    "Tools": ["Git", "Vite", "Bash", "VS Code"],
    "Other": ["REST APIs", "Linux/Unix", "LaTeX"]
  };

  return (
    <section className="about-me">
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <div className="about-header">
          <h2>About Me</h2>
          <p className="about-subtitle">Bridging Mathematics and Technology</p>
        </div>

        <div className="about-content">
          <div className="content-section">
            <div className="text-block">
              <h3>My Background</h3>
              <p>
                As a Honours Mathematics student at University of Waterloo, I've developed a strong 
                foundation in analytical thinking and problem-solving. This mathematical mindset 
                naturally led me to programming, where I discovered the perfect blend of logic, 
                creativity, and practical application.
              </p>
              <p>
                Through two co-op terms, I've gained hands-on experience building cloud-based web 
                applications and delivering production-ready solutions that solve real business problems.
              </p>
            </div>
          </div>

          <div className="content-section reverse">
            <div className="text-block">
              <h3>What I Do</h3>
              <p>
                I specialize in full-stack development using React and AWS, with experience in 
                architecting and deploying web applications that support real business operations. 
                I've built systems processing hundreds of transactions monthly and automated workflows 
                that significantly improve efficiency.
              </p>
              <p>
                My mathematical background gives me a unique perspective on optimization and 
                problem-solving, allowing me to approach complex technical challenges with 
                analytical rigor and deliver robust solutions.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills & Expertise</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={category} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="category-title">{category}:</h4>
                  <div className="skill-items">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
