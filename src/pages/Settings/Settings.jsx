import React from 'react';
import TabNavigation from '../../components/Settings/TabNavigation/TabNavigation';
import ProfileTab from '../../components/Settings/ProfileTab/ProfileTab';
import PreferencesTab from '../../components/Settings/PreferencesTab/PreferencesTab';
import SecurityTab from '../../components/Settings/SecurityTab/SecurityTab';
import './Settings.css';

const Settings = ({ activeTab, setActiveTab }) => {
  const renderTabContent = () => {
    switch(activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'preferences':
        return <PreferencesTab />;
      case 'security':
        return <SecurityTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-card">
        <TabNavigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;