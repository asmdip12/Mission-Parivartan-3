import React, { useState } from 'react';
import LoginModal from './LoginModal';
import { useAuth } from './AuthContext';
import TreeForm from './TreeForm';
import './HomePage.css';

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const { userType, logout } = useAuth();

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Mission Parivartan</h1>
          <p className="hero-subtitle">
            Transforming communities through environmental action and sustainable tree plantation initiatives
          </p>
        </div>
        <div className="hero-overlay"></div>
      </div>

      {/* Tree Plantation Banner Section */}
      <section id="tree-plantation" className="plantation-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="tree-emoji">🌱</span>
            Why Tree Plantation?
          </h2>
          
          <div className="content-grid">
            <div className="text-content">
              <div className="content-card">
                <p className="content-paragraph">
                  In 2025, India continues to face urgent environmental challenges — including rapid deforestation, 
                  climate instability, and rising pollution levels. Tree plantations play a crucial role in restoring 
                  ecological balance, improving air quality, and combating climate change.
                </p>
                
                <p className="content-paragraph">
                  The latest reports show that forest cover is still below the recommended 33%, making large-scale 
                  reforestation critical. Tree plantations help absorb carbon dioxide, filter pollutants, and increase 
                  biodiversity, making our cities and villages greener and healthier.
                </p>
                
                <p className="content-paragraph">
                  <strong className="highlight-text">Mission Parivartan</strong> leads impactful plantation drives 
                  across West Bengal and India. From school campuses to urban corners, we engage communities through 
                  awareness programs, restoration projects, and sustainable green initiatives.
                </p>
              </div>
            </div>
            
            <div className="image-content">
              <div className="image-wrapper">
                <img
                  src="/pic.png"
                  alt="Tree Plantation Activity"
                  className="plantation-image"
                />
                <div className="image-overlay">
                  <span className="image-caption">Tree Plantation Activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <div className="action-section">
        <div className="section-container">
          {/* Login Button */}
          {userType !== 'user' && (
            <div className="login-section">
              <div className="login-card">
                <h3 className="login-title">Join Our Mission</h3>
                <p className="login-description">
                  Login to start your tree planting journey and track your environmental impact
                </p>
                <button 
                  onClick={() => setShowLogin(true)} 
                  className="login-button"
                >
                  <span className="button-icon">🌿</span>
                  Login to Get Started
                </button>
              </div>
            </div>
          )}

          {/* User Dashboard */}
          {userType === 'user' && (
            <div className="user-dashboard">
              <div className="dashboard-header">
                <h2 className="dashboard-title">
                  <span className="dashboard-icon">🌳</span>
                  Your Tree Planting Dashboard
                </h2>
                <p className="dashboard-subtitle">
                  Track your trees and contribute to a greener future
                </p>
              </div>
              
              <div className="dashboard-content">
                <div className="form-section">
                  <h3 className="form-title">Plant a New Tree</h3>
                  <div className="form-wrapper">
                    <TreeForm />
                  </div>
                </div>
                
                <div className="dashboard-actions">
                  <button onClick={logout} className="logout-button">
                    <span className="button-icon">👋</span>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
}