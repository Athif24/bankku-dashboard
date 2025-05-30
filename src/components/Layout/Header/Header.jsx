import React, { useState } from 'react';
import SearchBar from '../../Common/SearchBar/SearchBar';
import { Settings, Bell, AlignJustify, X, User } from 'lucide-react';
import './Header.css';

const Header = ({ pageTitle, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [avatarError, setAvatarError] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  const handleAvatarLoad = () => {
    setAvatarError(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Left Section */}
        <div className="header-left">
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="menu-icon" />
            ) : (
              <AlignJustify className="menu-icon" />
            )}
          </button>
          <h1 className="page-title">{pageTitle}</h1>
        </div>
        
        {/* Right Section - Desktop/Tablet */}
        <div className="header-right">
          <div className="search-bar-desktop">
            <SearchBar />
          </div>
          <button className="icon-btn">
            <Settings className="icon" />
          </button>
          <button className="icon-btn notification-btn">
            <Bell className="icon" />
            <span className="notification-dot"></span>
          </button>
          <button className="profile-btn">
            {avatarError ? (
              <div className="avatar-fallback-header">
                <User className="avatar-fallback-icon" />
              </div>
            ) : (
              <img 
                src="/assets/images/avatar-1.jpg"
                alt="Profile" 
                className="avatar-img"
                onError={handleAvatarError}
                onLoad={handleAvatarLoad}
              />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="mobile-search-wrapper">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;