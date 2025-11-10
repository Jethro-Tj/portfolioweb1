import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ handleNavigation }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <h1>Jethro Tedjosoesilo</h1>
      <nav>
        <ul>
          <li><button className="button-89" onClick={() => handleNavigation('/')}>Home</button></li>
          <li><button className="button-89" onClick={() => handleNavigation('/about')}>About Me</button></li>
          <li><button className="button-89" onClick={() => handleNavigation('/projects')}>Projects</button></li>
          <li><button className="button-89" onClick={() => handleNavigation('/experience')}>Experience</button></li>
          <li><button className="button-89" onClick={() => handleNavigation('/contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
