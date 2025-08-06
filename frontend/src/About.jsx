import React from 'react';
import { Leaf, Target, Eye, Users, TreePine, BarChart3, Heart, Award, Scaling as Seedling, MapPin, Calendar, TrendingUp } from 'lucide-react';
import './About.css';
import { useState } from 'react';
// import TreeForm from './TreeForm';
function About() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="page-container">
      {/* Top mission banner - preserving original logic */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          color: '#00ff99',
          textAlign: 'center',
          padding: '1rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderBottom: '1px solid #333',
        }}
      >
        On a mission to plant <span style={{ color: '#00ffcc' }}>1 lakh trees</span>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text-center">
            <div className="hero-badge">
              <Leaf className="badge-icon" />
              <span className="badge-text">Growing a Greener Tomorrow</span>
            </div>
            
            <h1 className="hero-title">
              About <span className="text-emerald">Mission</span>
              <br />
              <span className="text-emerald-light">Parivartan</span>
            </h1>
            
            <p className="hero-description">
              Welcome to our green mission. We aim to bring change through reforestation, 
              awareness, and action. Together, we're not just planting trees – we're cultivating hope.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <TreePine className="stat-icon" />
                <h3 className="stat-number">50,000+</h3>
                <p className="stat-label">Trees Planted</p>
              </div>
              <div className="stat-card">
                <Users className="stat-icon" />
                <h3 className="stat-number">25,000+</h3>
                <p className="stat-label">Community Members</p>
              </div>
              <div className="stat-card">
                <Award className="stat-icon" />
                <h3 className="stat-number">95%</h3>
                <p className="stat-label">Survival Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-content">
              <div className="section-badge">
                <Target className="badge-icon-small" />
                <span className="badge-text-small">Our Mission</span>
              </div>
              <h2 className="section-title">
                Transforming Lives Through <span className="text-emerald">Green Action</span>
              </h2>
              <p className="section-description">
                Mission Parivartan is dedicated to creating sustainable environmental change by empowering 
                individuals to become tree guardians. We don't just distribute plants – we build lasting 
                relationships between people and nature.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <div className="point-dot"></div>
                  <p>Distribute native plant saplings to communities across India</p>
                </div>
                <div className="mission-point">
                  <div className="point-dot"></div>
                  <p>Track and monitor plant growth through innovative technology</p>
                </div>
                <div className="mission-point">
                  <div className="point-dot"></div>
                  <p>Educate communities about sustainable environmental practices</p>
                </div>
              </div>
            </div>
            
            <div className="vision-content">
              <div className="section-badge">
                <Eye className="badge-icon-small" />
                <span className="badge-text-small">Our Vision</span>
              </div>
              <h2 className="section-title">
                A Greener, <span className="text-emerald">Healthier Planet</span>
              </h2>
              <p className="section-description">
                We envision a world where every individual feels connected to nature and takes responsibility 
                for environmental conservation. Our goal extends beyond tree planting to fostering a 
                generation of environmental stewards.
              </p>
              
              <div className="goals-card">
                <h3 className="goals-title">Our 2025 Goals</h3>
                <div className="goals-list">
                  <div className="goal-item">
                    <span className="goal-label">Trees Planted</span>
                    <span className="goal-value">100,000</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-label">Cities Covered</span>
                    <span className="goal-value">50</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-label">Community Partners</span>
                    <span className="goal-value">200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="process-section">
        <div className="container">
          <div className="process-header">
            <div className="section-badge">
              <BarChart3 className="badge-icon-small" />
              <span className="badge-text-small">Our Process</span>
            </div>
            <h2 className="process-title">
              From <span className="text-emerald">Seed</span> to <span className="text-emerald">Success</span>
            </h2>
            <p className="process-description">
              Our comprehensive approach ensures every plant has the best chance of survival and growth
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon-container">
                <Seedling className="process-icon" />
              </div>
              <h3 className="process-card-title">Plant Distribution</h3>
              <p className="process-card-description">
                Free native saplings delivered to your doorstep with planting guides and care instructions
              </p>
              <div className="process-step">
                <span className="step-number">Step 1</span>
              </div>
            </div>

            <div className="process-card">
              <div className="process-icon-container">
                <MapPin className="process-icon" />
              </div>
              <h3 className="process-card-title">Location Mapping</h3>
              <p className="process-card-description">
                GPS tracking of each planted tree for monitoring and creating our green impact map
              </p>
              <div className="process-step">
                <span className="step-number">Step 2</span>
              </div>
            </div>

            <div className="process-card">
              <div className="process-icon-container">
                <Calendar className="process-icon" />
              </div>
              <h3 className="process-card-title">Regular Check-ins</h3>
              <p className="process-card-description">
                Monthly reminders and care tips sent directly to plant guardians via our app
              </p>
              <div className="process-step">
                <span className="step-number">Step 3</span>
              </div>
            </div>

            <div className="process-card">
              <div className="process-icon-container">
                <TrendingUp className="process-icon" />
              </div>
              <h3 className="process-card-title">Growth Tracking</h3>
              <p className="process-card-description">
                Photo uploads and progress tracking to monitor tree health and celebrate milestones
              </p>
              <div className="process-step">
                <span className="step-number">Step 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology & Innovation */}
      <div className="technology-section">
        <div className="container">
          <div className="technology-grid">
            <div className="technology-content">
              <div className="section-badge">
                <BarChart3 className="badge-icon-small" />
                <span className="badge-text-small">Innovation</span>
              </div>
              <h2 className="section-title">
                <span className="text-emerald">Smart Tracking</span> for Every Tree
              </h2>
              <p className="section-description">
                Our cutting-edge mobile application and web platform make it easy for plant guardians 
                to track their trees' progress, receive care reminders, and connect with our growing 
                community of environmental enthusiasts.
              </p>
              
              <div className="tech-stats">
                <div className="tech-stat">
                  <h4 className="tech-stat-number">98%</h4>
                  <p className="tech-stat-label">App User Satisfaction</p>
                </div>
                <div className="tech-stat">
                  <h4 className="tech-stat-number">24/7</h4>
                  <p className="tech-stat-label">Growth Monitoring</p>
                </div>
              </div>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-check"></div>
                  <span>Real-time growth photo uploads and timeline</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check"></div>
                  <span>Personalized care schedules and reminders</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check"></div>
                  <span>Community leaderboards and achievements</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check"></div>
                  <span>Expert consultation and support chat</span>
                </div>
              </div>
            </div>

            <div className="tracking-dashboard">
              <h3 className="dashboard-title">Track Your Impact</h3>
              <div className="dashboard-metrics">
                <div className="metric-item">
                  <div className="metric-header">
                    <span className="metric-label">Trees Survived</span>
                    <span className="metric-value">23/25</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div className="metric-item">
                  <div className="metric-header">
                    <span className="metric-label">CO₂ Absorbed</span>
                    <span className="metric-value">145 kg</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill green" style={{ width: '73%' }}></div>
                  </div>
                </div>
                
                <div className="metric-item">
                  <div className="metric-header">
                    <span className="metric-label">Community Rank</span>
                    <span className="metric-value">#47</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill yellow" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container cta-content">
          <Heart className="cta-icon" />
          <h2 className="cta-title">
            Join Our Green Revolution
          </h2>
          <p className="cta-description">
            Every tree planted is a step towards a sustainable future. 
            Be part of something bigger than yourself – be part of the change.
          </p>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">Free</div>
              <div className="cta-stat-label">Plant Distribution</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">24/7</div>
              <div className="cta-stat-label">Expert Support</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">100%</div>
              <div className="cta-stat-label">Transparent Tracking</div>
            </div>
          </div>

          <div className="cta-buttons">
          <button onClick={() => setShowForm(true)}>Get Your Free Plants</button>

      {showForm && <TreeForm onClose={() => setShowForm(false)} />}

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container footer-content">
          <p className="footer-text">
            Together, we're not just planting trees – we're planting hope for the future.
          </p>
          <div className="footer-brand">
            <Leaf className="footer-icon" />
            <span className="footer-brand-text">Mission Parivartan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;