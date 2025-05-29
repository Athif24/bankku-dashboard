import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Toggle from '../../Common/Toggle/Toggle';
import './SecurityTab.css';

const SecurityTab = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: '**********',
    new: '**********'
  });

  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    alert('Security settings saved successfully!');
    console.log('Two-factor authentication:', twoFactorEnabled);
    console.log('Password updated');
  };

  return (
    <div className="security-tab">
      <div className="security-section">
        <div className="two-factor-section">
          <h3 className="section-title">Two-factor Authentication</h3>
          <div className="two-factor-setting">
            <span className="setting-text">Enable or disable two factor authentication</span>
            <Toggle 
              checked={twoFactorEnabled}
              onChange={setTwoFactorEnabled}
            />
          </div>
        </div>

        <div className="password-section">
          <h3 className="section-title">Change Password</h3>
          <div className="password-form">
            <div className="password-group">
              <label className="form-label">Current Password</label>
              <div className="password-input-container">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwords.current}
                  onChange={(e) => handlePasswordChange('current', e.target.value)}
                  className="form-input password-input"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff className="eye-icon" /> : <Eye className="eye-icon" />}
                </button>
              </div>
            </div>
            <div className="password-group">
              <label className="form-label">New Password</label>
              <div className="password-input-container">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwords.new}
                  onChange={(e) => handlePasswordChange('new', e.target.value)}
                  className="form-input password-input"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff className="eye-icon" /> : <Eye className="eye-icon" />}
                </button>
              </div>
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

export default SecurityTab;