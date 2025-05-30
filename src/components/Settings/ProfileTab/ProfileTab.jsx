import React, { useState } from 'react';
import { User, Edit2 } from 'lucide-react';
import { USER_PROFILE } from '../../../data/staticData';
import './ProfileTab.css';

const ProfileTab = () => {
  const [profile, setProfile] = useState(USER_PROFILE);
  const [avatarHover, setAvatarHover] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Updated profile:', profile);
    // Add success notification here
  };

  const handleAvatarChange = () => {
    // Handle avatar upload
    console.log('Change avatar');
  };

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  const handleAvatarLoad = () => {
    setAvatarError(false);
  };

  return (
    <div className="profile-tab">
      <div className="profile-container">
        {/* Profile Header Section */}
        <div className="profile-header">
          <div 
            className="profile-avatar-wrapper"
            onMouseEnter={() => setAvatarHover(true)}
            onMouseLeave={() => setAvatarHover(false)}
          >
            {avatarError ? (
              <div className="profile-avatar-fallback">
                <User className="profile-fallback-icon" />
              </div>
            ) : (
              <img 
                src={profile.avatar} 
                alt="Profile" 
                className="profile-avatar"
                onError={handleAvatarError}
                onLoad={handleAvatarLoad}
              />
            )}
            <button 
              className={`avatar-edit-btn ${avatarHover ? 'show' : ''}`}
              onClick={handleAvatarChange}
            >
              <Edit2 className="edit-icon" />
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="profile-form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">User Name</label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="form-input"
                placeholder="Enter username"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  value="**********"
                  className="form-input"
                  readOnly
                />
                <button className="password-change-btn">Change</button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="text"
                value={profile.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="form-input"
                placeholder="DD/MM/YYYY"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Present Address</label>
              <input
                type="text"
                value={profile.presentAddress}
                onChange={(e) => handleInputChange('presentAddress', e.target.value)}
                className="form-input"
                placeholder="Enter present address"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Permanent Address</label>
              <input
                type="text"
                value={profile.permanentAddress}
                onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                className="form-input"
                placeholder="Enter permanent address"
              />
            </div>

            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                value={profile.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="form-input"
                placeholder="Enter city"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                value={profile.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="form-input"
                placeholder="Enter postal code"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Country</label>
              <input
                type="text"
                value={profile.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="form-input"
                placeholder="Enter country"
              />
            </div>
          </div>

          <div className="form-actions">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;