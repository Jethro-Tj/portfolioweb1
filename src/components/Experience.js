import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Samudra Agung",
      period: "May 2025 – Aug 2025",
      description: "Architected and deployed a sales monitoring web app supporting 120+ monthly orders with automated tracking.",
      achievements: [
        "Reduced order processing time by 60% by replacing manual entry with automated system",
        "Owned the full development lifecycle, from design through deployment",
        "Aligned technical solutions with business needs"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Samudra Agung",
      period: "May 2024 – Aug 2024",
      description: "Designed and implemented responsive React interfaces, streamlining navigation and order entry for internal staff.",
      achievements: [
        "Applied UI/UX design principles to replace manual spreadsheet-based workflows",
        "Built responsive interfaces for internal staff operations",
        "Streamlined order entry and navigation processes"
      ]
    },
    {
      title: "President",
      company: "Indonesian Student Association University of Waterloo",
      period: "Sep 2024 – Dec 2024",
      description: "Directed a 50+ member organization, coordinating cultural initiatives and events with 200+ attendees.",
      achievements: [
        "Built partnerships across student groups, increasing event participation",
        "Coordinated cultural initiatives and large-scale events",
        "Led a diverse team of 50+ members"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Mathematics, Honours Mathematics",
      institution: "University of Waterloo",
      period: "Aug 2023 – Present (Expected 2028)",
      relevant: [
        "CS 135 – Introduction to Computer Science",
        "CS 136 – Elementary Algorithm Design and Data Abstraction",
        "CS 246 – Object-Oriented Software Development",
        "STAT 230 – Probability and Statistics"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Amplify, DynamoDB, Lambda, Cognito",
      issuer: "Amazon Web Services",
      date: "2024-2025",
      status: "Hands-on Experience"
    },
    {
      name: "React Development",
      issuer: "Production Projects",
      date: "2024-2025",
      status: "Professional Experience"
    },
    {
      name: "Full-Stack Development",
      issuer: "Co-op Terms",
      date: "2024-2025",
      status: "Professional Experience"
    }
  ];

  return (
    <section className="experience">
      <div className={`experience-container ${isVisible ? 'visible' : ''}`}>
        <div className="experience-header">
          <h2>Experience & Education</h2>
          <p className="experience-subtitle">My journey in technology and mathematics</p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button 
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button 
              className={`tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'experience' && (
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="period">{exp.period}</span>
                      </div>
                      <h4 className="company">{exp.company}</h4>
                      <p className="description">{exp.description}</p>
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="education-grid">
                {education.map((edu, index) => (
                  <div key={index} className="education-card" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="education-header">
                      <h3>{edu.degree}</h3>
                      <span className="period">{edu.period}</span>
                    </div>
                    <h4 className="institution">{edu.institution}</h4>
                    {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                    <div className="relevant-courses">
                      <h5>Relevant Coursework:</h5>
                      <div className="courses-list">
                        {edu.relevant.map((course, i) => (
                          <span key={i} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-card" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="cert-header">
                      <h3>{cert.name}</h3>
                      <span className={`cert-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
