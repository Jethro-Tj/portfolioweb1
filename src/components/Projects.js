import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Financial Tracker – Sold to External Company",
      description: "Built and sold a financial ledger system adopted by an external company",
      technologies: ["React", "AWS Amplify", "DynamoDB", "Git"],
      features: [
        "Processed 200 transactions monthly",
        "Generated automated income statements",
        "End-to-end SaaS-style solution",
        "Real-world business adoption",
        "Cloud-based architecture"
      ],
      status: "Completed",
      github: "https://github.com/Jethro-Tj",
      demo: "#"
    },
    {
      id: 2,
      title: "Dungeon Crawler Game",
      description: "Collaborative C++ game development using OOP principles",
      technologies: ["C++", "Git", "OOP"],
      features: [
        "Team-based development with 3 members",
        "Object-oriented design patterns",
        "Version control best practices",
        "Stable main branch maintenance",
        "Collaborative debugging workflows"
      ],
      status: "Completed",
      github: "https://github.com/Jethro-Tj",
      demo: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal website with automated CI/CD pipelines",
      technologies: ["React", "Git", "CI/CD"],
      features: [
        "Responsive design",
        "Automated deployment pipelines",
        "Continuous updates",
        "Modern React architecture",
        "Professional portfolio showcase"
      ],
      status: "Completed",
      github: "https://github.com/Jethro-Tj",
      demo: "#"
    },
    {
      id: 4,
      title: "Discord Chat Bot",
      description: "Python chatbot with keyword-triggered responses for community engagement",
      technologies: ["Python", "Discord API"],
      features: [
        "Keyword-triggered responses",
        "Serves 50+ active users",
        "Private server integration",
        "Community engagement features",
        "Automated moderation"
      ],
      status: "Completed",
      github: "https://github.com/Jethro-Tj",
      demo: "#"
    }
  ];

  return (
    <section className="projects">
      <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
        <div className="projects-header">
          <h2>My Projects</h2>
          <p className="projects-subtitle">Building solutions that matter</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-more">+{project.technologies.length - 3}</span>
                )}
              </div>
              
              <div className="project-actions">
                <button className="btn-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedProject(null)}>×</button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <span className={`status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-actions">
                <a href={selectedProject.github} className="btn-primary">
                  View Code
                </a>
                <a href={selectedProject.demo} className="btn-secondary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
