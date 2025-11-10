import React, { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MouseInvert from './components/MouseInvert';
import './App.css';
import './PageTransitions.css';

const pageOrder = ['/', '/about', '/projects', '/experience', '/contact'];

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigation = (path) => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = pageOrder.indexOf(path);
    const direction = newIndex > currentIndex ? 'slide-right' : 'slide-left';
    setCurrentPage(path);
    setSlideDirection(direction);
    navigate(path);
  };

  const [slideDirection, setSlideDirection] = useState('slide-right'); // Default slide direction

  const navigateLeft = () => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = (currentIndex - 1 + pageOrder.length) % pageOrder.length;
    handleNavigation(pageOrder[newIndex]);
  };

  const navigateRight = () => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = (currentIndex + 1) % pageOrder.length;
    handleNavigation(pageOrder[newIndex]);
  };

  return (
    <div className="App">
      <Header handleNavigation={handleNavigation} />
      <MouseInvert />
      <div className="page-container">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1000}
            classNames={slideDirection}
          >
            <div className="page">
              <Routes location={location}>
                <Route path="/" element={<Home handleNavigation={handleNavigation} />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <button className="nav-arrow left-arrow" onClick={navigateLeft}>&lt;</button>
              <button className="nav-arrow right-arrow" onClick={navigateRight}>&gt;</button>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;