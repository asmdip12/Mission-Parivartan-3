import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {

  return (
    <div className="contact-page">
      

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="contact-header">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch with Mission Parivartan. We're here to help and answer any questions you might have.
            </p>
          </div>

          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-card">
                <h3>Get in Touch</h3>
                <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <p>contact@missionparivartan.org</p>
                      <p>support@missionparivartan.org</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-text">
                      <h4>Phone</h4>
                      <p>+91 98765 43210</p>
                      <p>+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-text">
                      <h4>Address</h4>
                      <p>123 Social Impact Street<br />
                      Community Block, New Delhi<br />
                      India - 110001</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">🕒</div>
                    <div className="contact-text">
                      <h4>Office Hours</h4>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-card">
                <h3>Follow Us</h3>
                <p>Stay connected with our mission and updates</p>
                <div className="social-links">
                  <a href="#" className="social-link facebook">Facebook</a>
                  <a href="#" className="social-link twitter">Twitter</a>
                  <a href="#" className="social-link instagram">Instagram</a>
                  <a href="#" className="social-link linkedin">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}