import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = ({ handleNavigation }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleButtonClick = () => {
    setShowIntro(true);
  };

  const handleCloseClick = () => {
    setShowIntro(false);
  };

  const handleContactClick = () => {
    handleNavigation('/contact');
  };

  return (
    <section className="home">
      <div className={`hero ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">Jethro Tedjosoesilo</h1>
          <h2 className="hero-subtitle">Full Stack Developer & Honours Mathematics Student</h2>
          <p className="hero-description">
            Building cloud-based web applications with React and AWS. Delivered production-ready solutions including a financial tracking system sold to an external company.
          </p>
          <div className="hero-actions">
            <button className="cta-button primary" onClick={handleButtonClick}>
              Learn More
            </button>
            <button className="cta-button secondary" onClick={handleContactClick}>
              Get In Touch
            </button>
          </div>
        </div>
        
        {showIntro && (
          <div className="intro-overlay">
            <div className="intro-box">
              <button className="close-button" onClick={handleCloseClick}>×</button>
              <h3>About My Journey</h3>
              <p>
                I'm a Honours Mathematics student at University of Waterloo in term 3A with two co-op terms 
                building cloud-based web applications using React and AWS. My unique background allows me to 
                approach complex problems with both analytical rigor and creative technical solutions.
              </p>
              <p>
                I've delivered production-ready solutions independently, including a financial tracking 
                system that was sold to an external company. Currently seeking new opportunities to 
                contribute to innovative projects.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;
