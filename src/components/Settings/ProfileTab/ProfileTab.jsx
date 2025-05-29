import React, { useState } from 'react';
import { USER_PROFILE } from '../../../data/staticData';
import './ProfileTab.css';

const ProfileTab = () => {
  const [profile, setProfile] = useState(USER_PROFILE);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
    console.log('Updated profile:', profile);
  };

  return (
    <div className="profile-tab">
      <div className="profile-section">
        <div className="profile-avatar-section">
          <div className="profile-avatar-container">
            <img 
              src={profile.avatar} 
              alt="Profile" 
              className="profile-avatar-img"
            />
            <button className="edit-avatar-btn">
              <span className="edit-icon">✏️</span>
            </button>
          </div>
        </div>

        <div className="profile-form">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">User Name</label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                value="**********"
                className="form-input"
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="text"
                value={profile.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Present Address</label>
              <input
                type="text"
                value={profile.presentAddress}
                onChange={(e) => handleInputChange('presentAddress', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Permanent Address</label>
              <input
                type="text"
                value={profile.permanentAddress}
                onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                value={profile.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                value={profile.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Country</label>
              <input
                type="text"
                value={profile.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="save-btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;