import React from 'react';
import { AlertTriangle, TreePine, Heart, Shield, Users, Target, Zap, Award, Globe, Leaf, CheckCircle, TrendingUp } from 'lucide-react';
import './WhyMP.css';

export default function WhyMP() {
  return (
    <div className="page-container">
      {/* Top mission banner - same as About page */}
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
              <AlertTriangle className="badge-icon" />
              <span className="badge-text">The Urgent Need for Action</span>
            </div>
            
            <h1 className="hero-title">
              Why <span className="text-emerald">Mission</span>
              <br />
              <span className="text-emerald-light">Parivartan?</span>
            </h1>
            
            <p className="hero-description">
              In a world facing unprecedented environmental challenges, Mission Parivartan stands as a beacon of hope. 
              Discover why our approach to environmental conservation is making a real difference.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <AlertTriangle className="stat-icon" />
                <h3 className="stat-number">30%</h3>
                <p className="stat-label">Forest Cover Lost</p>
              </div>
              <div className="stat-card">
                <Globe className="stat-icon" />
                <h3 className="stat-number">1.5°C</h3>
                <p className="stat-label">Temperature Rise</p>
              </div>
              <div className="stat-card">
                <TreePine className="stat-icon" />
                <h3 className="stat-number">15B</h3>
                <p className="stat-label">Trees Cut Annually</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Crisis Section */}
      <div className="crisis-section">
        <div className="container">
          <div className="crisis-grid">
            <div className="crisis-content">
              <div className="section-badge">
                <AlertTriangle className="badge-icon-small" />
                <span className="badge-text-small">Environmental Crisis</span>
              </div>
              <h2 className="section-title">
                The <span className="text-emerald">Urgent Reality</span> We Face
              </h2>
              <p className="section-description">
                Our planet is experiencing an environmental crisis of unprecedented scale. Climate change, 
                deforestation, and pollution are threatening the very foundation of life on Earth.
              </p>
              
              <div className="crisis-points">
                <div className="crisis-point">
                  <div className="point-icon-wrapper">
                    <AlertTriangle className="point-icon" />
                  </div>
                  <div className="point-content">
                    <h4 className="point-title">Rapid Deforestation</h4>
                    <p className="point-description">We lose 18.7 million acres of forest annually, equivalent to 27 soccer fields every minute.</p>
                  </div>
                </div>
                
                <div className="crisis-point">
                  <div className="point-icon-wrapper">
                    <Globe className="point-icon" />
                  </div>
                  <div className="point-content">
                    <h4 className="point-title">Climate Change</h4>
                    <p className="point-description">Global temperatures have risen by 1.1°C since pre-industrial times, causing extreme weather events.</p>
                  </div>
                </div>
                
                <div className="crisis-point">
                  <div className="point-icon-wrapper">
                    <Heart className="point-icon" />
                  </div>
                  <div className="point-content">
                    <h4 className="point-title">Health Impact</h4>
                    <p className="point-description">Air pollution causes 7 million premature deaths annually, with urban areas most affected.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="impact-visualization">
              <div className="impact-card">
                <h3 className="impact-title">Environmental Impact Timeline</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2020</div>
                    <div className="timeline-content">
                      <h4>Record Wildfires</h4>
                      <p>Australia and California faced devastating wildfires</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2021</div>
                    <div className="timeline-content">
                      <h4>Extreme Weather</h4>
                      <p>Unprecedented floods and heatwaves across the globe</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2022</div>
                    <div className="timeline-content">
                      <h4>Biodiversity Loss</h4>
                      <p>69% decline in wildlife populations since 1970</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2023</div>
                    <div className="timeline-content">
                      <h4>Tipping Points</h4>
                      <p>Critical climate tipping points being reached</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="solution-section">
        <div className="container">
          <div className="solution-header">
            <div className="section-badge">
              <Shield className="badge-icon-small" />
              <span className="badge-text-small">Our Solution</span>
            </div>
            <h2 className="section-title">
              Why <span className="text-emerald">Mission Parivartan</span> is Different
            </h2>
            <p className="section-description">
              We don't just plant trees – we create lasting environmental change through innovation, 
              community engagement, and scientific tracking.
            </p>
          </div>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon-container">
                <Target className="solution-icon" />
              </div>
              <h3 className="solution-card-title">Targeted Approach</h3>
              <p className="solution-card-description">
                We focus on native species and strategic locations for maximum environmental impact and survival rates.
              </p>
              <div className="solution-stats">
                <div className="stat-item">
                  <span className="stat-value">95%</span>
                  <span className="stat-label">Survival Rate</span>
                </div>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-icon-container">
                <Zap className="solution-icon" />
              </div>
              <h3 className="solution-card-title">Technology-Driven</h3>
              <p className="solution-card-description">
                Advanced tracking systems monitor every tree's growth, health, and environmental contribution in real-time.
              </p>
              <div className="solution-stats">
                <div className="stat-item">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Monitoring</span>
                </div>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-icon-container">
                <Users className="solution-icon" />
              </div>
              <h3 className="solution-card-title">Community-Centered</h3>
              <p className="solution-card-description">
                We empower individuals to become environmental stewards, creating lasting behavioral change.
              </p>
              <div className="solution-stats">
                <div className="stat-item">
                  <span className="stat-value">25K+</span>
                  <span className="stat-label">Active Members</span>
                </div>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-icon-container">
                <Award className="solution-icon" />
              </div>
              <h3 className="solution-card-title">Proven Results</h3>
              <p className="solution-card-description">
                Our scientific approach has achieved industry-leading success rates in tree survival and growth.
              </p>
              <div className="solution-stats">
                <div className="stat-item">
                  <span className="stat-value">50K+</span>
                  <span className="stat-label">Trees Thriving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Comparison */}
      <div className="comparison-section">
        <div className="container">
          <div className="comparison-grid">
            <div className="comparison-content">
              <div className="section-badge">
                <TrendingUp className="badge-icon-small" />
                <span className="badge-text-small">Real Impact</span>
              </div>
              <h2 className="section-title">
                <span className="text-emerald">Measurable</span> Environmental Change
              </h2>
              <p className="section-description">
                Unlike traditional tree-planting initiatives, Mission Parivartan delivers quantifiable, 
                long-term environmental benefits through our innovative approach.
              </p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4 className="benefit-title">Carbon Sequestration</h4>
                    <p className="benefit-description">Each mature tree absorbs 48 lbs of CO₂ annually</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4 className="benefit-title">Air Purification</h4>
                    <p className="benefit-description">Filters 27 lbs of air pollutants per year</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4 className="benefit-title">Biodiversity Support</h4>
                    <p className="benefit-description">Creates habitat for 100+ species per tree</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4 className="benefit-title">Community Health</h4>
                    <p className="benefit-description">Reduces urban heat by 2-8°F in surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="impact-dashboard">
              <h3 className="dashboard-title">Live Impact Tracker</h3>
              <div className="dashboard-metrics">
                <div className="metric-card">
                  <div className="metric-icon-wrapper">
                    <TreePine className="metric-icon" />
                  </div>
                  <div className="metric-content">
                    <h4 className="metric-number">2,400</h4>
                    <p className="metric-label">Tons CO₂ Absorbed</p>
                    <div className="metric-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '78%' }}></div>
                      </div>
                      <span className="progress-text">78% of annual goal</span>
                    </div>
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-icon-wrapper">
                    <Heart className="metric-icon" />
                  </div>
                  <div className="metric-content">
                    <h4 className="metric-number">1.35M</h4>
                    <p className="metric-label">Lbs Air Purified</p>
                    <div className="metric-progress">
                      <div className="progress-bar">
                        <div className="progress-fill green" style={{ width: '85%' }}></div>
                      </div>
                      <span className="progress-text">85% of annual goal</span>
                    </div>
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-icon-wrapper">
                    <Globe className="metric-icon" />
                  </div>
                  <div className="metric-content">
                    <h4 className="metric-number">5,000+</h4>
                    <p className="metric-label">Species Supported</p>
                    <div className="metric-progress">
                      <div className="progress-bar">
                        <div className="progress-fill yellow" style={{ width: '92%' }}></div>
                      </div>
                      <span className="progress-text">92% biodiversity increase</span>
                    </div>
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
          <Leaf className="cta-icon" />
          <h2 className="cta-title">
            Be Part of the Solution
          </h2>
          <p className="cta-description">
            The environmental crisis demands immediate action. Join Mission Parivartan and become 
            part of a movement that's creating real, measurable change for our planet's future.
          </p>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">Today</div>
              <div className="cta-stat-label">Start Making Impact</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">Free</div>
              <div className="cta-stat-label">Plants & Support</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">Lifetime</div>
              <div className="cta-stat-label">Environmental Legacy</div>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="btn-primary">
              Join Our Mission
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container footer-content">
          <p className="footer-text">
            Every action counts. Every tree matters. Every person can make a difference.
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