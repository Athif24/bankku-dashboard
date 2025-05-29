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
      <div className="preferences-section">
        <div className="settings-grid">
          <div className="setting-group">
            <h3 className="setting-title">Currency</h3>
            <div className="setting-value">
              <div className="currency-display">
                <span className="currency-text">{preferences.currency}</span>
              </div>
            </div>
          </div>
          <div className="setting-group">
            <h3 className="setting-title">Time Zone</h3>
            <div className="setting-value">
              <div className="timezone-display">
                <span className="timezone-text">{preferences.timezone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="notification-section">
          <h3 className="section-title">Notification</h3>
          <div className="notification-list">
            <div className="notification-item">
              <span className="notification-text">I send or receive digita currency</span>
              <Toggle 
                checked={preferences.notifications.digitalCurrency}
                onChange={(value) => handleNotificationChange('digitalCurrency', value)}
              />
            </div>
            <div className="notification-item">
              <span className="notification-text">I receive merchant order</span>
              <Toggle 
                checked={preferences.notifications.merchantOrder}
                onChange={(value) => handleNotificationChange('merchantOrder', value)}
              />
            </div>
            <div className="notification-item">
              <span className="notification-text">There are recommendation for my account</span>
              <Toggle 
                checked={preferences.notifications.recommendations}
                onChange={(value) => handleNotificationChange('recommendations', value)}
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

export default PreferencesTab;