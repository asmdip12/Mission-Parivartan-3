import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { User, Mail, Calendar, BarChart3, Edit3, LogOut, X, Camera, Award, TreePine, Heart } from 'lucide-react';
import './profile.css';

const ProfileModal = ({ isOpen, onClose, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  if (!isOpen) return null;

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      sessionStorage.removeItem('userToken');
      window.location.href = '/';
    }
  };

  const userData = user || {
    name: 'John Doe',
    email: 'john.doe@example.com',
    formSubmissions: 5,
    avatar: null,
    joinDate: '2024-01-15',
    treesPlanted: 12,
    // badges: ['Early Adopter', 'Tree Guardian', 'Green Warrior']
  };
  const modalContent = (
    <>
      <div className="profile-modal-overlay" onClick={onClose} />
      
      <div className="profile-modal">
        {/* Close button */}
        <button className="profile-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {userData.avatar ? (
                <img src={userData.avatar} alt="Profile" className="avatar-image" />
              ) : (
                <div className="avatar-placeholder">
                  <User size={32} />
                </div>
              )}
              <button className="avatar-edit-btn">
                <Camera size={16} />
              </button>
            </div>
            <div className="profile-status">
              <div className="status-indicator active"></div>
              <span className="status-text">Active Member</span>
            </div>
          </div>
          
          <div className="profile-title-section">
            <h2 className="profile-title">My Profile</h2>
            <p className="profile-subtitle">Manage your account and track your environmental impact</p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <TreePine size={20} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{userData.treesPlanted}</span>
              <span className="stat-label">Trees Planted</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <BarChart3 size={20} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{userData.formSubmissions}</span>
              <span className="stat-label">Submissions</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Heart size={20} />
            </div>
            <div className="stat-content">
              <span className="stat-number">{userData.co2Absorbed}</span>
              <span className="stat-label">CO₂ Absorbed (lbs)</span>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="profile-info">
          <div className="info-section">
            <div className="info-header">
              <User size={18} />
              <label className="info-label">Full Name</label>
            </div>
            {isEditing ? (
              <input
                type="text"
                className="info-input"
                value={editData.name}
                onChange={(e) => setEditData({...editData, name: e.target.value})}
              />
            ) : (
              <div className="info-value">{userData.name}</div>
            )}
          </div>

          <div className="info-section">
            <div className="info-header">
              <Mail size={18} />
              <label className="info-label">Email Address</label>
            </div>
            {isEditing ? (
              <input
                type="email"
                className="info-input"
                value={editData.email}
                onChange={(e) => setEditData({...editData, email: e.target.value})}
              />
            ) : (
              <div className="info-value">{userData.email}</div>
            )}
          </div>

          <div className="info-section">
            <div className="info-header">
              <Calendar size={18} />
              <label className="info-label">Member Since</label>
            </div>
            <div className="info-value">
              {new Date(userData.joinDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          <div className="info-section">
            <div className="info-header">
              <Award size={18} />
              <label className="info-label">Impact Score</label>
            </div>
            <div className="info-value">
              <div className="impact-score">
                <span className="score-number">{userData.impactScore}</span>
                <div className="score-bar">
                  <div 
                    className="score-fill" 
                    style={{ width: `${userData.impactScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        

        {/* Logout Section */}
        <div className="logout-section">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ProfileModal;