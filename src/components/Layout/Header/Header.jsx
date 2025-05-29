import React from 'react';
import SearchBar from '../../Common/SearchBar/SearchBar';
import { Settings, Bell } from 'lucide-react';
import './Header.css';

const Header = ({ pageTitle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="page-title">{pageTitle}</h1>
        <div className="header-actions">
          <SearchBar />
          <button className="action-btn">
            <Settings className="action-icon" />
          </button>
          <button className="action-btn notification-btn">
            <Bell className="action-icon" />
            <span className="notification-badge"></span>
          </button>
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b1fc?w=400&h=400&fit=crop&crop=face" 
              alt="Profile" 
              className="avatar-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;