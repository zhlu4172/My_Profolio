import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Portfolio</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ai-tools"
              className={`nav-link nav-link--ai ${location.pathname === '/ai-tools' ? 'active' : ''}`}
            >
              AI Toolbox
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
