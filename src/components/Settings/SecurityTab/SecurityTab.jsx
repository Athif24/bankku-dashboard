import React, { useState } from 'react';
import './SecurityTab.css';

const SecurityTab = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwords, setPasswords] = useState({
    current: '',
    new: ''
  });

  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Security settings saved');
    alert('Security settings saved successfully!');
  };

  return (
    <div className="security-tab">
      
      {/* Two-Factor Authentication Section */}
      <div className="security-group">
        <div className="section-info">
          <h2 className="section-title">Two-Factor Authentication</h2>
          <p className="section-subtitle">Enable or disable two factor authentication</p>
        </div>
        <div className="toggle-wrapper">
          <label className="security-toggle">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              className="toggle-checkbox"
            />
            <span className="toggle-track"></span>
          </label>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="security-group password-section">
        <h2 className="section-title">Change Password</h2>
        
        <div className="password-fields">
          <div className="field-group">
            <label className="field-label">Current Password</label>
            <input
              type="password"
              placeholder="**********"
              value={passwords.current}
              onChange={(e) => handlePasswordChange('current', e.target.value)}
              className="password-field"
            />
          </div>
          
          <div className="field-group">
            <label className="field-label">New Password</label>
            <input
              type="password"
              placeholder="**********"
              value={passwords.new}
              onChange={(e) => handlePasswordChange('new', e.target.value)}
              className="password-field"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="save-container">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
      
    </div>
  );
};

export default SecurityTab;