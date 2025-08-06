import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const ProfileLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear sessionStorage or call logout logic
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className={`bg-teal border-end ${isCollapsed ? 'collapsed' : ''}`} id="sidebar-wrapper">
        <div className="sidebar-heading text-white">🌱 Mission Parivartan</div>
        <div className="list-group list-group-flush">
          <a href="/" className="list-group-item list-group-item-action bg-teal text-white">Dashboard</a>
          <a href="/features" className="list-group-item list-group-item-action bg-teal text-white">Features</a>
          <a href="/gallery" className="list-group-item list-group-item-action bg-teal text-white">Gallery</a>
          <a href="/events" className="list-group-item list-group-item-action bg-teal text-white">Events</a>
          <a href="/about" className="list-group-item list-group-item-action bg-teal text-white">About</a>
          <a href="/contact" className="list-group-item list-group-item-action bg-teal text-white">Contact</a>
          <button className="list-group-item list-group-item-action bg-danger text-white" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper" className="w-100">
        <nav className="navbar navbar-light bg-light border-bottom">
          <button className="btn btn-primary" onClick={() => setIsCollapsed(!isCollapsed)}>
            ☰ Toggle Menu
          </button>
        </nav>

        <div className="container-fluid mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
