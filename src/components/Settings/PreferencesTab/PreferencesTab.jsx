import React, { useState } from 'react';
import Toggle from '../../Common/Toggle/Toggle';
import './PreferencesTab.css';

const PreferencesTab = () => {
  const [preferences, setPreferences] = useState({
    currency: 'USD',
    timezone: '(GMT-12:00) International Date Line West',
    notifications: {
      digitalCurrency: true,
      merchantOrder: false,
      recommendations: true
    }
  });

  const handleNotificationChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    alert('Preferences saved successfully!');
    console.log('Updated preferences:', preferences);
  };

  return (
    <div className="preferences-tab">
      {/* Currency and Time Zone Section */}
      <div className="settings-grid">
        <div className="setting-field">
          <label className="field-label">Currency</label>
          <div className="field-box">
            <span className="field-value">{preferences.currency}</span>
          </div>
        </div>
        
        <div className="setting-field">
          <label className="field-label">Time Zone</label>
          <div className="field-box">
            <span className="field-value timezone-value">{preferences.timezone}</span>
          </div>
        </div>
      </div>

      {/* Notification Section */}
      <div className="notification-section">
        <h2 className="notification-title">Notification</h2>
        
        <div className="notification-items">
          <div className="notification-row">
            <span className="notification-text">I send or receive digita currency</span>
            <Toggle 
              checked={preferences.notifications.digitalCurrency}
              onChange={(value) => handleNotificationChange('digitalCurrency', value)}
            />
          </div>
          
          <div className="notification-row">
            <span className="notification-text">I receive merchant order</span>
            <Toggle 
              checked={preferences.notifications.merchantOrder}
              onChange={(value) => handleNotificationChange('merchantOrder', value)}
            />
          </div>
          
          <div className="notification-row">
            <span className="notification-text">There are recommendation for my account</span>
            <Toggle 
              checked={preferences.notifications.recommendations}
              onChange={(value) => handleNotificationChange('recommendations', value)}
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

export default PreferencesTab;